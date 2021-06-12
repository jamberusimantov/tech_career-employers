const hrCollection = require("../hr/hr_model");
const studentCollection = require("../student/student_model");
const companiesCollection = require("../company/company_model");
const adminCollection = require("../admin/admin_model");
const register_validation = require("./register_validation");
const {
  validateInitialUserRegistration,
  validateRegisterInput,
  validateCompanyRegisterInput,
  validateLoginInput,
} = register_validation;
const emailer = require("../../email/email");
const DB = require("../../utils/DB.utils");
const register = require("../../utils/register.utils");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const collections = {
  hr: hrCollection,
  student: studentCollection,
  admin: adminCollection,
};
const { getDoc, updateDoc, postDocs, msgs, filteredPrivateProps } = DB;
const { authRequest } = register;
const {
  requiredToken,
  unauthorizedToken,
  success,
  failure,
  err,
  unauthorizedCredentials,
} = msgs;
const registerMsgs = {
  requiredRole: (serviceName) => `required role on ${serviceName}`,
  unsupportedRole: (serviceName) => `unsupported role on ${serviceName}`,
  duplicateItem: (serviceName) => `user already a member on ${serviceName}`,
};
const { requiredRole, unsupportedRole, duplicateItem } = registerMsgs;
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const tokenOptions = { expiresIn: day };
const baseApi = "http://localhost:4201";
const signToken = (req, res, payload, message, emailVerification = false) => {
  const { _id } = payload;
  const role = req.params.Role && req.params.Role.toLowerCase();
  if (!role)
    return res.status(404).json({
      success: false,
      message: requiredRole("signToken"),
    });
  const collection = collections[role];
  jwt.sign(payload, keys.secretOrKey, tokenOptions, async (err, token) => {
    if (err) throw new Error(`error on sign token ${err}`);
    const dataToUpdate = !emailVerification
      ? { _id, isActive: true, token: `Bearer ${token}` }
      : { _id, token: `Bearer ${token}` };
    const updateDocSuccessCb = async (data) => {
      const client =
        process.env.NODE_ENV === "production"
          ? "https://mernusers.herokuapp.com"
          : "http://localhost:3000";
      const link = new URL(
        `http://localhost:3000/signUp/${role}/${token}/${_id}`
      );
      if (!emailVerification)
        return res.status(200).json({
          success: true,
          token,
          data: {
            email: data.email,
          },
          message: success(`signToken, ${message}`),
        });
      const emailResponse = await emailer(data.email, link);
      if (emailResponse.error)
        return res.status(404).json({
          success: false,
          error: emailResponse.error,
        });
      if (emailResponse.rejected.length)
        return res.status(404).json({
          success: false,
          error: `rejected ${emailResponse.rejected.length} emails on send email`,
          data: emailResponse.rejected,
        });

      res.status(200).json({
        success: true,
        data: {
          email: emailResponse.accepted,
          emailResponse: emailResponse.response,
        },
        message: success(`signToken, sendEmail to ${emailResponse.accepted}`),
      });
    };
    const updateDocFailCb = () =>
      res.status(400).json({
        success: false,
        message: failure("signToken"),
      });
    const updateRes = await updateDoc(
      collection,
      dataToUpdate,
      updateDocSuccessCb,
      updateDocFailCb
    );
    if (updateRes && updateRes.error) throw new Error(updateRes.error);
  });
};

/**
 * initial register Admin 
 * @param {*} req
 * @param {*} res
 */

async function signUpAdmin(req, res) {
  const token = req.headers.authorization;
  const user = req.body.user;
  const { password } = user;
  const role = req.params.Role && req.params.Role.toLowerCase();
  if (!role)
    return res.status(404).json({
      success: false,
      message: requiredRole("signUpUser"),
    });
  const collection = collections[role];
  if (!collection)
    return res.status(404).json({
      success: false,
      message: unsupportedRole("signUpUser"),
    });
  if (!token)
    return res.status(400).json({
      success: false,
      message: requiredToken(`signUp ${role}`),
    });
  const { errors, isValid } = validateRegisterInput(user);
  if (!isValid) return res.status(400).json(errors);

  const request = async (data) => {
    if (!data)
      return res.status(400).json({
        success: false,
        message: unauthorizedToken("signUpUser"),
      });
    hashAndUpdateUser();
  };
  const hashAndUpdateUser = () => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw new Error(err("gen Salt", error));
      bcrypt.hash(password, salt, async (error, hash) => {
        if (error) throw new Error(err("hash password", error));
        user.password = hash;
        user.isAuth = true;
        const docToUpdate = await updateDoc(
          collection,
          user,
          updateUserSuccess,
          updateUserFail
        );
        if (docToUpdate && docToUpdate.error)
          throw new Error(docToUpdate.error);
      });
    });
  };
  const updateUserSuccess = (data) =>
    res.status(201).json({
      success: true,
      message: success("signUpUser"),
    });
  try {
    authRequest(token, request, res);
  } catch (error) {
    res.status(400).json({ success: false, error });
  } finally {
  }
}



















/**
 * initial register User to website- hr collection/ user Collection
 * @param {*} req
 * @param {*} res
 */
async function registerUser(req, res) {
  const user = req.body.user;
  const role = req.params.Role && req.params.Role.toLowerCase();
  const { errors, isValid } = validateInitialUserRegistration(user, role);
  if (!isValid) return res.status(400).json(errors);
  if (!role)
    return res.status(404).json({
      success: false,
      message: requiredRole("registerUser"),
    });
  const collection = collections[role];
  if (!collection)
    return res.status(404).json({
      success: false,
      message: unsupportedRole("registerUser"),
    });
  const getUserSuccess = () =>
    res.status(400).json({
      success: false,
      message: duplicateItem(`register ${role}`),
    });
  const company = { name: user.company };

  const getUserFail = async () => {
    if (role !== "hr") return await getCompanySuccess();
    const companyFromDB = await getDoc(
      companiesCollection,
      company,
      getCompanySuccess,
      getCompanyFail
    );
    if (companyFromDB && companyFromDB.error)
      throw new Error(companyFromDB.error);
  };
  const getCompanySuccess = async () => {
    const postRes = await postDocs(collection, user, postUserSuccess);
    if (postRes && postRes.error) throw new Error(postRes.error);
  };
  const getCompanyFail = async () => {
    const postRes = await postDocs(
      companiesCollection,
      company,
      postCompanySuccess
    );
    if (postRes && postRes.error) throw new Error(postRes.error);
  };
  const postUserSuccess = async () => {
    const query = { email: user.email };
    const getUserSuccess = (data) => {
      const { _id, name, email } = data;
      const payload = { _id, name, email };
      signToken(req, res, payload, success("postUser"), true);
    };
    const getUserFail = () =>
      res.status(400).json({ success: false, message: failure("postUser") });
    const getRes = await getDoc(collection, query, getUserSuccess, getUserFail);
    if (getRes && getRes.error) throw new Error(getRes.error);
  };

  const postCompanySuccess = async () => {
    user.isCompanyFirstUser = true;
    const postRes = await postDocs(collection, user, postUserAndCompanySuccess);
    if (postRes && postRes.error) throw new Error(postRes.error);
  };
  const postUserAndCompanySuccess = async () => {
    const query = { email: user.email };
    const getUserSuccess = (data) => {
      const { _id, name, email } = data;
      const payload = { _id, name, email };
      signToken(req, res, payload, success("postUser and postCompany"), true);
    };
    const getUserFail = () =>
      res.status(400).json({ success: false, message: failure("postUser") });
    const getRes = await getDoc(collection, query, getUserSuccess, getUserFail);
    if (getRes && getRes.error) throw new Error(getRes.error);
  };
  try {
    const userFromDB = await getDoc(
      collection,
      user,
      getUserSuccess,
      getUserFail
    );
    if (userFromDB && userFromDB.error) throw new Error(userFromDB.error);
  } catch (error) {
    res.status(400).json({ success: false, error });
  } finally {
  }
}
/**
 * sign up user to website- hr collection/ user Collection
 * @param {*} req
 * @param {*} res
 */



async function signUpUser(req, res) {
  const token = req.headers.authorization;
  const user = req.body.user;
  const company = req.body.company;
  const { password } = user;
  const role = req.params.Role && req.params.Role.toLowerCase();
  if (!role)
    return res.status(404).json({
      success: false,
      message: requiredRole("signUpUser"),
    });
  const collection = collections[role];
  if (!collection)
    return res.status(404).json({
      success: false,
      message: unsupportedRole("signUpUser"),
    });
  if (!token)
    return res.status(400).json({
      success: false,
      message: requiredToken(`signUp ${role}`),
    });
  const { errors, isValid } = validateRegisterInput(user);
  if (!isValid) return res.status(400).json(errors);

  const request = async (data) => {
    if (!data)
      return res.status(400).json({
        success: false,
        message: unauthorizedToken("signUpUser"),
      });
    const { _id, isCompanyFirstUser } = data;
    user._id = _id;
    if (isCompanyFirstUser) {
      const { errors, isValid } = validateCompanyRegisterInput(company);
      if (!isValid) return res.status(400).json(errors);
      const query = { name: data.company };
      const getCompany = await getDoc(
        companiesCollection,
        query,
        getCompanySuccess,
        getCompanyFail
      );
      if (getCompany && getCompany.error) throw new Error(getCompany.error);
    }
    hashAndUpdateUser();
  };
  const hashAndUpdateUser = () => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw new Error(err("gen Salt", error));
      bcrypt.hash(password, salt, async (error, hash) => {
        if (error) throw new Error(err("hash password", error));
        user.password = hash;
        user.isAuth = true;
        const docToUpdate = await updateDoc(
          collection,
          user,
          updateUserSuccess,
          updateUserFail
        );
        if (docToUpdate && docToUpdate.error)
          throw new Error(docToUpdate.error);
      });
    });
  };
  const getCompanyFail = () =>
    res.status(404).json({
      success: false,
      message: failure("signUpUser, company not found"),
    });
  const getCompanySuccess = async (data) => {
    const { _id } = data;
    company._id = _id;
    const docToUpdate = await updateDoc(
      companiesCollection,
      company,
      updateCompanySuccess,
      updateCompanyFail
    );
    if (docToUpdate && docToUpdate.error) throw new Error(docToUpdate.error);
  };
  const updateCompanyFail = () =>
    res.status(404).json({
      success: false,
      message: failure("signUpUser update company"),
    });
  const updateCompanySuccess = (data) => hashAndUpdateUser();

  const updateUserFail = () =>
    res.status(404).json({
      success: false,
      message: failure("signUpUser"),
    });
  const updateUserSuccess = (data) =>
    res.status(201).json({
      success: true,
      message: success("signUpUser"),
    });

  try {
    authRequest(token, request, res);
  } catch (error) {
    res.status(400).json({ success: false, error });
  } finally {
  }
}



/**
 * login user to website- hr collection/ user Collection
 * @param {*} req
 * @param {*} res
 */
async function loginUser(req, res) {
  const user = req.body.user;
  const role = req.params.Role && req.params.Role.toLowerCase();
  const { email, password } = user;
  const query = { email };
  console.log(query);
  if (!role)
    return res.status(404).json({
      success: false,
      message: "role is required",
    });
  const collection = collections[role];
  if (!collection)
    return res.status(404).json({
      success: false,
      message: `role: ${role} is not recognized`,
    });
  const { errors, isValid } = validateLoginInput(user);
  if (!isValid) return res.status(400).json(errors);
  const getDocSuccessCb = async (data) => {
    const { _id, name, email } = data;
    const passwordFromDB = data.password;
    if (!data.isAuth)
      return res.status(400).json({
        success: false,
        message: "unsigned user on loginUser",
      });
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const isMatch = await bcrypt.compare(passwordFromDB, passwordHash);

    if (!isMatch)
      return res.status(400).json({
        success: false,
        message: unauthorizedCredentials("loginUser"),
      });
    const payload = { _id, name, email };
    signToken(req, res, payload, success("loginUser"));
  };
  const getDocFailCb = () =>
    res.status(400).json({
      success: false,
      message: failure("loginUser"),
    });
  try {
    const getRes = await getDoc(
      collection,
      query,
      getDocSuccessCb,
      getDocFailCb
    );
    if (getRes && getRes.error) throw new Error(updateRes.error);
  } catch (error) {
    return res.status(400).json({ success: false, error });
  } finally {
  }
}
/**
 * get user by token from hr collection
 * @param {*} req
 * @param {*} res
 */
async function useToken(req, res) {
  const token = req.headers.authorization;
  console.log('user not found token from reg ctrl' + token);
  if (!token)
  return res.status(400).json({
    success: false,
    message: "authorization token needed",
  });
  const request = async (data) => {
    if (!data)
      return res.status(400).json({
        success: false,
        message: unauthorizedToken("useToken"),
      });
    res.status(201).json({
      success: true,
      data: filteredPrivateProps(data, "self"),
      message: `get own data for:${data.email} successfully`,
    });
  };
  try {
    authRequest(token, request, res);
  } catch (error) {
    res.status(400).json({ success: false, error });
  } finally {
  }
}
module.exports = {
  registerUser,
  signUpUser,
  loginUser,
  useToken,
  signUpAdmin
};

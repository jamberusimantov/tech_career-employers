import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './utils';
import windowDimensionsActions from './redux/actions/windowDimensions.actions';
import usersActions from './redux/actions/user.actions';

const { setUserData } = usersActions.usersActions;
const { setWindowDimensions } = windowDimensionsActions.windowDimensionsActions;

const mapDispatchToProps = (dispatch: any) => ({
  setWindowDimensions: (size: Object) => { dispatch(setWindowDimensions(size)) },
  setUserData: (data: Object) => { dispatch(setUserData(data)) },
})
const mapStateToProps = (state: any) => {
  return {
    windowDimensions: state.windowDimensions,
    userData: state.user.userData,
  };
}


function App(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { windowDimensions, setWindowDimensions, setUserData, userData } = props
  const { login, app: { getWindowDimensions }, jobOffer: { postJobOffer }} = service
  const { registerUser, signUpUser, loginUser, getUserUseToken, setTokenLocal } = login
  const { LayoutMain } = components;
  const { appStyle } = styles;
  const token = login.getToken();

  postJobOffer({ uploadedBy: 'google' }, token).then(data => console.log(data))
  // getManyCompanies(token, { field: 'internet' }).then(data => console.log(data))
  // getManyCompanies(token).then(data => console.log(data))
  // getCompanyById('60b72bef59a5dcdfa2c218cc', token).then(data => console.log(data))
  // updateCompanyById({info:'big brother reality internet 2'},"60b72bef59a5dcdfa2c218cc",token).then(data => console.log(data))
  // deleteCompanyById('60b72c1359a5dcdfa2c218cd',token).then(data => console.log(data))

  // getCompany({ name: 'facebook' }, token).then(data => console.log(data))
  // getManyCompanies(token, { field: 'internet' }).then(data => console.log(data))
  // getManyCompanies(token).then(data => console.log(data))
  // getCompanyById('60b72bef59a5dcdfa2c218cc', token).then(data => console.log(data))
  // updateCompanyById({info:'big brother reality internet 2'},"60b72bef59a5dcdfa2c218cc",token).then(data => console.log(data))
  // deleteCompanyById('60b72c1359a5dcdfa2c218cd',token).then(data => console.log(data))

  // getHr({ email: "lior@king.com" }, token).then(data => console.log(data))
  // getManyHrs(token, { company: 'google' }).then(data => console.log(data))
  // getManyHrs(token).then(data => console.log(data))
  // getHrById("60b61267ac39f113dedb0439", token).then(data => console.log(data))
  // updateHrById({phone:'1800bootstrapON'},"60b61267ac39f113dedb0439",token).then(data => console.log(data))
  // deleteCompanyById('60b72c1359a5dcdfa2c218cd',token).then(data => console.log(data))

  // getStudent({ email: "lior@king.com" }, token).then(data => console.log(data))
  // getManyStudents(token, { company: 'google' }).then(data => console.log(data))
  // getManyStudents(token).then(data => console.log(data))
  // getStudentById("60b61267ac39f113dedb0439", token).then(data => console.log(data))
  // updateStudentById({phone:'1800bootstrapON'},"60b61267ac39f113dedb0439",token).then(data => console.log(data))  








  // ספר המתכונים של סימן טוב 

  //1. post User to db by admin
  // registerUser({ company: 'google', email: 'jamber@google.com' }, 'hr')
  // .then(data => {console.log(data.data.link)}); 


  //2.get User Use Token
  // const path = window.location.pathname
  // const token = path.substr(path.lastIndexOf('/'))
  // getUserUseToken(token)
  //   .then(async (userData) => {
  //     const { data: { company, isCompanyFirstUser } } = userData
  //     if (company) {
  //       console.log(`get Company by name: ${company}`);
  //       const dbCompany = await getCompany({ name: company }, token)
  //       if (!isCompanyFirstUser) {
  //         console.log('company already exist');
  //         return { dbCompany, userData }
  //       }
  //       console.log('company awaiting for signUp');
  //       return { dbCompany, userData }
  //     }
  //     return {userData}
  //   }).then(data => console.log(data))


  //3. update user to db by user regFlow 
  // const user = {
  //   email: "jamber@google.com",
  //   name: "siman tov the 3RD ",
  //   phone: "1800codeit",
  //   password: "123456",
  //   password1: "123456"
  // }
  // const company = {
  //   field: 'internet',
  //   info: 'best workplace by far',
  //   phone: 'no need to call, we hear everything ;)',
  //   address: '3260, herzel blvd, lod',
  // }
  // signUpUser({ company, user }, 'hr', token).then(data => console.log(data))

  //4.login user to db
  // const user = {
  //   email: "jamber@google.com",
  //   password: "123456"
  // }
  // loginUser(user, 'hr').then(data => {
  //   data && data.token && setTokenLocal(data.token)
  //   console.log(data)
  // })




  useEffect(() => {
    const user = {
      email: "test2@gmail.com",
      password: "123123"
    }
    let token = false
    const loginHandler = async()=>{
      token = await loginUser(user, 'student')

    }
    
      if (token) {
        getUserUseToken(token).then((userDataUseToken) => {
          console.log(userDataUseToken);

          // if (userDataUseToken.success) {
          //   setUserData(userDataUseToken.data)
          // }
        })
        return () => {
          setUserData(Object);
        }
      }
    }, [getUserUseToken, login, setUserData]);

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [setWindowDimensions, getWindowDimensions]);

    const classes = appStyle()

    if (!userData.email) {
      return (
        <div className={classes.App}>
          <LayoutMain />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <LayoutMain />
      </div>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)

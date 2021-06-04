import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './utils';
import usersActions from './redux/actions/user.actions';
import { getAllStudents } from './service/students.service';

const { setUserData } = usersActions.usersActions;

const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: Object) => { dispatch(setUserData(data)) },
})
const mapStateToProps = (state: any) => {
  return {
    userData: state.user.userData,
  };
}


export default function App(props: any) {
  const { setUserData, userData } = props
  const { login } = service
  const { getUserUseToken } = login
  const { LayoutMain } = components;
  const { appStyle } = styles;
  const token = login.getToken();

  // postJobOffer({ uploadedBy: 'google' }, token).then(data => console.log(data))
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  
  

  const user = {
    email:"Moshe@gmail.com",
    password: "123123"
  }
  loginUser(user, 'student').then(data => {
    data && data.token && setTokenLocal(data.token)
    localStorage.setItem('token', `Bearer ${data.token}`)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAllStudents()
    .then(res=>console.log(res))
    // console.log(getAllTest)
  })
  // getUserUseToken(token).then(data => console.log(data))




  // useEffect(() => {
  //   if (token) {
  //     getUserUseToken(token).then((userDataUseToken) => {
  //       console.log(userDataUseToken);
        
  //       if (userDataUseToken.success) {
  //         setUserData(userDataUseToken.data)
  //       }
  //     })
  //     return () => {
  //       setUserData(Object);
  //     }
  //   }
  // }, [getUserUseToken, login, setUserData]);


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


    const classes = appStyle()

    // if (!userData.email) {
    //   return (
    //     <div className={classes.App}>
    //       <LayoutMain />
    //     </div>
    //   );
    // }

    return (
      <div className={classes.App}>
        <LayoutMain />
      </div>
    );
  }


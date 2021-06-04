import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './utils';
import usersActions from './redux/actions/user.actions';

const { setUserData } = usersActions.usersActions;

const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: Object) => { dispatch(setUserData(data)) },
})
const mapStateToProps = (state: any) => {
  return {
    userData: state.user.userData,
  };
}


function App(props: any) {
  const { setUserData, userData } = props
  const { login } = service
  const { getUserUseToken } = login
  const { LayoutMain } = components;
  const { appStyle } = styles;
  
  // const user = {
  //   email: "jamber@google.com",
  //   password: "123456"
  // }
  
  
  // useEffect(() => {
  //   login.loginUser(user, 'hr').then((data: any) => {
  //     data.token && login.setTokenLocal(data.token)
  //     console.log(data)
  //   })
  // }, []);
  
  useEffect(() => {
    const token = login.getToken();
    if (token) {
      getUserUseToken(token).then((data) => {
        data.success && setUserData(data.data);

      })
      return () => {
        setUserData(Object);
      }
    }
  }, [getUserUseToken, login, setUserData]);

  const classes = appStyle()

  if (!userData.email) {
    return (
      <div className={classes.App}>
        <h1>no user </h1>
        <LayoutMain />
      </div>
    );
  }

  return (
    <div className={classes.App}>
      <h1>{userData.email}</h1>
      <LayoutMain />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

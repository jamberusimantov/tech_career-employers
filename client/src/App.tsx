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
  const token = login.getToken();

  useEffect(() => {
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
  }, [getUserUseToken, login, setUserData, token]);

  const classes = appStyle()

  if (!userData.email) {
    return (
      <div className={classes.App}>
              <h1>akuo</h1>

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

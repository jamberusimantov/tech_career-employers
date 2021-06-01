import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './service';
import CssBaseline from '@material-ui/core/CssBaseline';
import windowDimensionsActions from './redux/actions/windowDimensions.actions';
import usersActions from './redux/actions/user.actions';
import Login from './components/Login/Login';
import Register from './components/Register';
import RegistrationForm from './components/RegistrationForm';

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
  const { login, app: { getWindowDimensions } } = service
  const { getUserUseToken } = login.default
  const { LayoutMain } = components;
  const { appStyle } = styles;

  useEffect(() => {
    const token = login.default.getToken();
    if (token) {
      getUserUseToken(token).then((userDataUseToken) => {
        if (userDataUseToken.success) {
          setUserData(userDataUseToken.data)
        }
      })
      return () => {
        setUserData(Object);
      }
    }
  }, [getUserUseToken, login.default, setUserData]);

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
        <CssBaseline />
        
        <LayoutMain/>
      </div>
    );
  }

  return (
    <div className={classes.App}>
      <CssBaseline />
      <LayoutMain />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

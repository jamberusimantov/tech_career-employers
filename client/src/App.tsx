import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './service';
import CssBaseline from '@material-ui/core/CssBaseline';
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
  const { windowDimensions, setWindowDimensions, setUserData, userData } = props
  const { login, app: { getWindowDimensions } } = service
  const { getUserUseToken } = login.default
  const { Layout } = components;
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
        <Layout>
          <h1 className={classes.title}>please log in/ sign up to continue</h1>
          <h2>width: {windowDimensions.width}</h2>
          <h2>height: {windowDimensions.height}</h2>

          <button onClick={() => {
            login.default.loginUser({
              password: '123456',
              email: 'jamber.simantov@walla.co.il'
            })
              .then(res => res.success && login.default.setTokenLocal(res.token))
          }}>login as lorem ipsum</button>

        </Layout>
      </div>
    );
  }

  return (
    <div className={classes.App}>
      <CssBaseline />
      <Layout>
        <h1 className={classes.title}>{userData.email} profile page</h1>
      </Layout>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

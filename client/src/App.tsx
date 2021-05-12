import Layout from './components/Layout';
import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import service from './service';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
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
  const useStyles = makeStyles((theme) => ({
    title: {
      color: 'blue',
      fontSize: '2.5rem'
    }
  }));
  const classes = useStyles();

  useEffect(() => {
    const token = login.default.getToken();
    if (token) {
      getUserUseToken(token).then((userDataUseToken) => {
        if (userDataUseToken.success) {
          setUserData(userDataUseToken.data)
        }
      })
    }
    return () => {
      setUserData(Object);
    }
  }, [getUserUseToken, login.default, setUserData]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions, getWindowDimensions]);


  if (!login.default.getToken()) {
    return (
      <div className="App">
        <CssBaseline />
        <h1 className={classes.title}>please log in/sign up to continue</h1>
        <h2>width: {windowDimensions.width}</h2>
        <h2>height: {windowDimensions.height}</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <CssBaseline />
      <Layout>
        <h1 className={classes.title}>{userData.name} profile page</h1>
      </Layout>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

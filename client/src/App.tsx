import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './utils';
import usersActions from './redux/actions/user.actions';

const { setUserData } = usersActions.usersActions;
const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: Object) => { dispatch(setUserData(data)) }})
const mapStateToProps = (state: any) => {return {userData: state.user.userData}}

 function App(props: any) {
  const { setUserData, userData } = props
  const { login } = service
  const { getUserUseToken } = login
  const { LayoutMain } = components;
  const { appStyle } = styles;
  const token = login.getToken();


  useEffect(() => {
      const loginHandler = async()=>{
        
        if(token){
          const userFromToken = await getUserUseToken(token)
          if (userFromToken.success) {
            login.setTokenLocal(token)
            await setUserData(userFromToken)
          }

        }
      }
      
    loginHandler()
    }, [getUserUseToken, login, setUserData]);


    const classes = appStyle()
    console.log(userData)

    if (!userData.email) {
      return (
        <div className={classes.App}><LayoutMain isLoggedIn = {false}/></div>
      );
    }
    return (
      <div className={classes.App}><LayoutMain isLoggedIn = {true} /></div>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App)
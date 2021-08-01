import components from './components'
import styles from './styles'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import service from './utils';
import usersActions from './redux/actions/user.actions';


function App(props: any) {
  const { setUserData, userData } = props
  const { login } = service
  const { getUserUseToken } = login
  const { LayoutMain } = components;
  const { appStyle } = styles;
  const classes = appStyle()
  
  useEffect(() => {
    const token = login.getToken();
    const loginHandler = async () => {
      const userFromToken = await getUserUseToken(token)
      if (userFromToken.success) {
        login.setTokenLocal(token)
        setUserData(userFromToken.data)
      }
    }
    if (token) {
      loginHandler()
    }

  }, [getUserUseToken, login, setUserData]);

  return (
    <div className={classes.App}>
      <LayoutMain isLoggedIn={userData?.email ? true : false} />
    </div>
  );
}


const { setUserData } = usersActions.usersActions;

const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: Object) => { dispatch(setUserData(data)) }
})
const mapStateToProps = (state: any) => ({ user: state.user })

export default connect(mapStateToProps, mapDispatchToProps)(App)
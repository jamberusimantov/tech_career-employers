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


export default function App(props: any) {
  const { setUserData, userData } = props
  const { login } = service
  const { getUserUseToken } = login
  const { LayoutMain } = components;
  const { appStyle } = styles;
  const token = login.getToken();

  useEffect(() => {
    const user = {
      email: "test2@gmail.com",
      password: "123123"
    }
    let token = false
    const loginHandler = async()=>{
      // token = await loginUser(user, 'student')

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


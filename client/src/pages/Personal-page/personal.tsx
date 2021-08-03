import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.personal.css";
import {
  GithubOutlined, LinkedinOutlined, CameraOutlined,
  FormOutlined, HomeOutlined, FileAddOutlined,
  EditOutlined, StepBackwardOutlined, SendOutlined,
} from "@ant-design/icons";
import service from "../../utils";
import usersActions from '../../redux/actions/user.actions';
import { connect } from 'react-redux';
import { IUser, icons } from './utils.personal'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function StudentPersonal(props: any) {
  const { userData, setUserData } = props;
  const { _id, name, email, cycle, about, programmingLang, links, cv } = userData;
  const [newUserData, setNewUserData] = useState<IUser>(userData)
  const [submitBtnLoader, setSubmitBtnLoader] = useState<boolean>()
  const [editMode, setEditMode] = useState<boolean>()
  const { updateStudent } = service.student;

  const Panel = () => {

    const fileChangeHandler = (e: any, option?: string) => {
      const files = e.target.files;
      const file = files[0];
      if (!file) return;
      const { name, type } = file || {};
      const size = `${Math.round(file.size / 1000)} kB`;
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = `${reader.result}`;
        option === 'cv' ? setNewUserData({ ...newUserData, cv: { name, type, size, base64 } })
          : setNewUserData({ ...newUserData, profilePicture: base64 });
      }
      reader.readAsDataURL(file);
    }

    const submitOptions = {
      child:
        <div className='icon-Btn submit-Btn' >
          <Loader
            type="Puff"
            visible={submitBtnLoader}
            color='#7DBBE6'
          />
          <SendOutlined />
          <span
            className='icon-Btn submit-Btn-status'
            style={{ fontSize: 'x-large', fontWeight: 400, }}
            children={'SUBMIT'} />
        </div>,
      color: '#7DBBE6',
      clickFunc: async () => {
        setSubmitBtnLoader(true);
        const token = `${localStorage.getItem('token')}`;
        newUserData._id = _id;
        const updateResponse = await updateStudent(newUserData, newUserData._id, token);
        setSubmitBtnLoader(false);
        if (!updateResponse?.success) return console.log(updateResponse);
        setUserData({ ...userData, ...updateResponse.data });
        setEditMode(false)
      }
    }
    return (<>{editMode && <div className="edit-options">
      <div>
        <button
          className='uploadBtn-studentPersonal uploadBtn-picture'
          type="button"
          aria-label="upload picture" >
          <span className='uploadText'>PROFILE</span>,
          <CameraOutlined className='uploadIcon' />
          <input type='file'
            className='icon-Btn uploadFile uploadFile-picture'
            onChange={fileChangeHandler} />
        </button>
        <button
          className='uploadBtn-studentPersonal uploadBtn-cv'
          type="button"
          aria-label="upload cv">
          <span className='uploadText'>CV</span>
          <FileAddOutlined className='uploadIcon' />
          <input type='file'
            className='icon-Btn uploadFile uploadFile-cv'
            onChange={(e: any) => fileChangeHandler(e, 'cv')} />
        </button>
      </div>
      <div>
        {icons([submitOptions])}
      </div>
    </div>}</>)
  }

  const Links = () => {
    const fileDownloadHandler = () => {
      if (!cv?.base64) return;
      const link = document.createElement('a');
      link.href = cv.base64;
      link.download = `${cv.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    const linksOptions = [
      { child: <FormOutlined />, clickFunc: fileDownloadHandler },
      { href: links?.personalSite, child: <HomeOutlined />, color: '#BB001B' },
      { href: links?.linkedIn, child: <LinkedinOutlined />, color: '#2867B2' },
      { href: links?.github, child: <GithubOutlined />, color: '#7DBBE6' },
    ];
    return icons(linksOptions)
  }

  const titleOptions = {
    child:
      < div className='icon-Btn' >
        {!editMode ? <EditOutlined /> : <StepBackwardOutlined />}
        <span className='icon-Btn submit-Btn-status'
          style={{ fontSize: 'x-large', fontWeight: 400, }}
          children={!editMode ? 'EDIT' : 'BACK'} />
      </div >,
    color: '#7DBBE6',
    clickFunc: !editMode ? () => {
      setEditMode(true);
      setSubmitBtnLoader(false);
      setNewUserData(userData)
    }
      : () => {
        setEditMode(undefined);
        setSubmitBtnLoader(undefined);
        setNewUserData(userData)
      }
  }

  return (<div className="StudentPersonal">
    <div className='paper'>
      <div className="title">{icons([titleOptions])}</div>
      <div className="grid-top">
        <div className="userCardImage-container" >
          <div className="userCardImage">
            < img
              alt={userData?.name}
              src={
                newUserData?.profilePicture ||
                userData?.profilePicture || ''
              } />
          </div>
        </div>
        <div className="userInfo-container">
          <div className="userInfo">
            <h1><b>{name}</b></h1>
            <h2><b>{email}</b></h2>
            <p>{cycle}</p>
            <div>
              <ul className='programmingLang'>
                {React.Children.toArray((!editMode ? programmingLang : 
                newUserData.programmingLang)?.map((lang: string, index: number) =>
                  <li><b className='programmingLang-checkbox'>{lang}</b></li>))}
              </ul>
            </div>
            <Links />
          </div>
        </div>
      </div>
      <div className='grid-bottom'>
        <h3>{about}</h3>
      </div>
      <Panel />
    </div>
  </div>
  );
}

const { setUserData } = usersActions.usersActions;

const mapStateToProps = (state: any) => ({
  userData: state.user,
});
const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: Object) => dispatch(setUserData(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(StudentPersonal)
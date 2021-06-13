import React, { useState, useEffect } from 'react';
import { getManyJobOffers } from '../../utils/drafts/jobOffer.utils';
import { Card, Button, Menu, Dropdown, Spin, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './JobCards.css'
// import JobEditPage from './JobEditPage';
import JobCardsHeader from './JobCardsHeader';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {return {userData: state.user.userData.data}}


 function JobCards(props:any) {

    const { userData } = props
    console.log(userData);

    const history = useHistory()
    const [jobOffer, setJobOffer] = useState<any[]>([])
    const [selcted, setSelcted] = useState({})
    const [company, setCompany] = useState('')

    

   const getJobData = async () => {
   
    const jobOfferData =  (userData.company)? await getManyJobOffers({company:userData.company}): await getManyJobOffers()
     console.log(userData)
    setJobOffer(jobOfferData.data || [])
    
        
    }

    function addNewJob(){
    history.push('/addNewJob')

    }


function historyPushData(currentJob:any){
    history.push('/JobEditPage', {jobData:currentJob})
}

    useEffect(() => {
        getJobData()
    }, [])

    const menu = (
        <Menu>
            <Menu.Item>
                <a href="#"> כותרת</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#"> תאריך</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#"> מיקום</a>
            </Menu.Item>
        </Menu>
    );

    return (
        (jobOffer.length < 1) ?
            <Spin size="large" />
            :
        <div>
            <JobCardsHeader />
            < div className="site-card-border-less-wrapper">
                <div className="navBtn">
                    <Button>ערוך</Button>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            מיון משרות   <DownOutlined />
                        </a>
                    </Dropdown>
                    <div className="addNewJobBtn">
                        <Button onClick={addNewJob}>הוסף משרה חדשה</Button>
                    </div>
                </div>

                
                
            
            <div >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {jobOffer.map((job, index)=>
                     <Card title={jobOffer[index].company} bordered={true} style={{ width: 400 }}>
                    <p>{jobOffer[index].jobDescription}</p>
                    <p>{jobOffer[index].position}</p>
                    <p>{jobOffer[index].location}</p>
                    <p>{jobOffer[index].status}</p>
                    <span className="applicans">פניות</span>
                    <span className="number"> {jobOffer[index].numOfPeopleApplied} </span>
                    <Button className="readMoreBtn" type="primary" onClick={()=>{historyPushData(jobOffer[index])}}>קרא עוד</Button>
                </Card>
                
                    )}
                </Row>
                
                
            </div>
                
               
            </div>
        </div >

    );
}
export default connect(mapStateToProps, null )(JobCards)
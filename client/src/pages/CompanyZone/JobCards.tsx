import React, { useState, useEffect } from 'react';
import { getManyJobOffers } from '../../utils/drafts/jobOffer.utils';
import { Card, Button, Menu, Dropdown, Spin, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './JobCards.css'
// import JobEditPage from './JobEditPage';
import JobCardsHeader from './JobCardsHeader';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = (state: any) => { return { userData: state.user} }


function JobCards(props: any) {

    const { userData } = props
    // console.log(userData);

    const history = useHistory()
    const [jobOffer, setJobOffer] = useState<any[]>([])
    // const [selcted, setSelcted] = useState({})
    // const [company, setCompany] = useState('')



    // const getJobData = async () => {

    //     try {
    //         const jobOfferData = (userData.company) ? await getManyJobOffers({ company: userData.company }) : await getManyJobOffers()
    //         console.log(userData)
    //         console.log(jobOfferData);
    //         setJobOffer(jobOfferData.data || [])
    //     }
    //     catch (error) {
    //         console.log(error);

    //     }

    // }

    function addNewJob() {
        history.push('/addNewJob')

    }


    function historyPushData(currentJob: any) {
        history.push('/JobEditPage', { jobData: currentJob })
    }

    useEffect(() => {
        const getJobData = async () => {
            const jobOfferData = await getManyJobOffers(userData?.company && { company: userData.company })
            setJobOffer(jobOfferData.data || [])
        }
        getJobData()
    }, [userData])

    const menu = (
        <Menu>
            <Menu.Item>
                <a href="/#"> כותרת</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/#"> תאריך</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/#"> מיקום</a>
            </Menu.Item>
        </Menu>
    );

    return (
        (jobOffer.length < 1) ?
            <Spin size="large" />
            :
        <div>
            {/* <JobCardsHeader /> */}
            < div className="site-card-border-less-wrapper">
                <div id="jobCardsHeader" className="navBtn">
                    <div>1
                    <Button>ערוך</Button>
                    </div>

                    <div>2
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>מיון משרות<DownOutlined /></a>
                    </Dropdown>
                    </div>

                    <div className="addNewJobBtn">3
                        <Button onClick={addNewJob}>הוסף משרה חדשה</Button>
                    </div>

                </div>

                
                
            
            <div id="mainCardDiv">
            
                <Row className='jobCardRow' gutter={{ xs: 8, sm: 16, md: 24, lg: 35 }}>
                {jobOffer.map((job, index)=>
                
                     <Card className="jobCard"  title={jobOffer[index].company} bordered={true} style={{ width: 400 }}>
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
                
               <div></div>
            </div>
        </div >

    );
}
export default connect(mapStateToProps, null)(JobCards)
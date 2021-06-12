import React, { useEffect, useState } from 'react'
import { Card, Button, Input, InputNumber, Radio } from 'antd';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom"
import { getManyJobOffers } from '../../service/jobOffer.service'
import './JobEditPage.css';
import Login from '../../utils/login.utils'
import { useLocation } from 'react-router-dom'
 
export default function JobEditPage() {
    const { TextArea } = Input;
    const [value, setValue] = React.useState(1);
const [cardType, setCardType] = useState(false)
const [jobOffers, setJobOffers] = useState([])
const location:any = useLocation ();
const JobObject:any  = location.state.jobData;
    console.log(JobObject);
    
    function numberOnChange(value) {
        console.log('changed', value);
      } 
      
      const rdioOnChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      }; 

    function changeCardType(){
        if(cardType === false)
        {setCardType(true)}
    else{setCardType(false)}
    }  

    return (
(!cardType)?
        <div>

            <JobCardsHeader />
          
            <div className="site-card-border-less-wrapper">

                
                <Card id="showCard" title={JobObject.company}  bordered={false} style={{ width: 700 }}>
                    
                    <div className="JobRequirement">
                        <h2>{JobObject.position}</h2>
                        <h3>{JobObject.jobDescription}</h3>
                        <p>{JobObject.minYearsOfExperience} שנות ניסיון</p>
                        <p>זמינות: {JobObject.status}</p>
                    </div>
                    <div className="jobDetails">
                        <p>{JobObject.notes}</p>
                    </div>
                    <div className="btns">
                        <Button type="primary" onClick={changeCardType}>ערוך</Button>
                        <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                    </div>
                </Card>

            </div>
        </div>

        :

        <div>

        <JobCardsHeader />
      
        <div className="site-card-border-less-wrapper">

            
        <Card id="editCard" title={JobObject.company}  bordered={false}>
                    
                    <div className="JobRequirement">
                        <Input className="allInputClass" placeholder="position" />
                        <Input className="allInputClass" placeholder="Job description" />
                        <br></br>
                        <h5>שנות ניסיון:</h5>
                        <InputNumber className="allInputClass" min={0} max={10} defaultValue={0} onChange={numberOnChange}/>
                        <br></br>
                        <h5>סטטוס:</h5>
                        <Radio.Group className="allInputClass" onChange={rdioOnChange} value={value}>
                            <Radio value={1}>פתוח </Radio>
                            <Radio value={2}>סגור</Radio>
                        </Radio.Group>
                    </div>
                    <div className="jobDetails">
                    <TextArea rows={4} placeholder="פרטי המשרה עד 4 שורות"/>
                    </div>
                    <div className="btns">
                        <Button type="primary" onClick={changeCardType}>שמור</Button>
                        <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                    </div>
                </Card>

        </div>
    </div>
    )
}

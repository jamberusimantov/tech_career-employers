import React,{useEffect,useState} from 'react'

import {deleteJobOfferById} from '../../../utils/drafts/jobOffer.utils'


function DeletingJobOffer(props: any) {

    const {jobOfferId } = props;
    
    const [loading, setLoading] = useState(false);



    useEffect(() => {

        async function fetchData() {
            try {
                
                await deleteJobOfferById("60c38c5204d0b761e409bdd2")
            } catch (error) {
                
            }
        }

    },[])
    return (
        <div>
            
        </div>
    )
}

  // deleteJobOfferById('60b787e1b3434f0a98f21459',token).then(data => console.log(data))

export default DeletingJobOffer

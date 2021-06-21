import { getDoc, postDoc, getManyDocs, getDocById, updateDocById, deleteDocById } from '../DB.utils';
const err = (serviceName: string, error: string) => `error on ${serviceName}: ${error}`;
const collection = 'courses'
const key = 'courses'
const body = (query: object) => ({ jobOffer: query })


export const postJobOffer = async (doc: object, token?: string) => {
    try {
        return await postDoc(collection, body(doc), key, token)
    }
    catch (error) { return { success: false, error: err('courses', error) } }
    finally { }
}

 
  // const course = {
  //   uploadedBy: 'jamber@google.com',
  //   finalDateToApply,
  //   company: 'google',
  //   location: 'tel aviv',
  //   jobDescription: 'codein +',
  //   workRequirements: 'ambition',
  //   minYearsOfExperience: '0',
  //   notes: 'promise to robust you :)',
  // }
  


  // postCourse(jobOffer, token).then(data => console.log(data))

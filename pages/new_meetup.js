import { useRouter } from 'next/router'
import MeetupForm from '../Components/NewMeetup/MeetupForm'
let New_meetup=()=>{
    let Router=useRouter();

    let submitfunction=async(data)=>{
        console.log(data)
        let result=await fetch('/api/NewMeetups',{
            method:"POST"
            ,body:JSON.stringify(data)
            ,headers:{
                'Content-Type':'application/json'
            }
        })
      
            Router.push('/')
        
    }
    return (
           <div style={{display:"grid",placeItems:"center",height:"80vh"}}>
               <MeetupForm submitFun={submitfunction}/>
           </div>
    
    )
}

export default New_meetup

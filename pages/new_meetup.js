import { useRouter } from 'next/router'
import React from 'react'
import MeetupForm from '../Components/NewMeetup/MeetupForm'
function new_meetup() {
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

export default new_meetup

import React from 'react'
import { useRouter } from 'next/router'
import MeetupDetail from '../Components/MeetupComponents/MeetupDetail'
import {MongoClient, ObjectId} from "mongodb"

function meetupId({meetups}) {
    console.log(meetups)
    return (
           <MeetupDetail imgl={meetups.imaglink+meetups._id} title={meetups.title} subtitle={meetups.description} address={meetups.address}/>
    )
}

export default meetupId
export let getStaticPaths=async()=>{
    const client= await MongoClient.connect('mongodb+srv://jawadraza123:jawadraza123@cluster0.emjju.mongodb.net/myMeetups?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
    const db=client.db();
   const meetupCollection=db.collection('meetups')
   const result= await meetupCollection.find({},{_id:1}).toArray();
   client.close();
    return{
        fallback:true,
        paths:result.map(rest=>({params:{
            meetupId:rest._id.toString()
        },}))
    }
}
export let getStaticProps=async(context)=>{
    let meetid=context.params.meetupId;
    const client= await MongoClient.connect('mongodb+srv://jawadraza123:jawadraza123@cluster0.emjju.mongodb.net/myMeetups?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
    const db=client.db();
   const meetupCollection=db.collection('meetups')
   const selected= await meetupCollection.findOne({_id:ObjectId(meetid)});
   client.close();
return{
  props:{
    meetups:{
        _id:selected._id.toString(),
        title:selected.title,
        description:selected.description,
        imaglink:selected.imaglink,
        address:selected.address,
    }
  },
  revalidate:5
}
}

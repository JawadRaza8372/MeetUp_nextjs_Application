import Head from 'next/head'
import Image from 'next/image'
import MeetupList from '../Components/MeetupComponents/MeetupList'
import MainLayout from '../Components/Layout/MainLayout'
import {MongoClient} from "mongodb"

export default function Home({meetups}) {
console.log(meetups)
  return (
    <MeetupList list={meetups}/>
  )
}
// export let getStaticProps=async()=>{
// return{
//   props:{
//     meetups:demo
//   },
//   revalidate:5
// }
// }
export let getServerSideProps=async(context)=>{
  let req=context.req;
  let res=context.res;
  const client= await MongoClient.connect('mongodb+srv://jawadraza123:jawadraza123@cluster0.emjju.mongodb.net/myMeetups?retryWrites=true&w=majority')
  const db=client.db();
 const meetupCollection=db.collection('meetups')
 const result= await meetupCollection.find().toArray();
 client.close();
  return{
    props:{
      meetups:result.map(res=>({title:res.title,description:res.description,imaglink:res.imaglink,id:res._id.toString()}))
    }
  }
  }
  

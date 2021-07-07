import {MongoClient} from "mongodb"
async function AllMeetups (req,res) {
  
    const client= await MongoClient.connect('mongodb+srv://jawadraza123:jawadraza123@cluster0.emjju.mongodb.net/myMeetups?retryWrites=true&w=majority')
    const db=client.db();
   const meetupCollection=db.collection('meetups')
   const result= await meetupCollection.find().toArray();
   client.close();
   console.log(result)
   res.json(result)
 
}

export default AllMeetups

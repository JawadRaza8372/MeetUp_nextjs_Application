import React,{useState} from 'react'

function MeetupForm({submitFun}) {
    const [state, setstate] = useState({imaglink:'https://picsum.photos/200/300?random='})
    let subitfunction=(e)=>{
        e.preventDefault();
        submitFun(state);
    }
    let handle=(e)=>{
        const name=e.target.id;
        const value=e.target.value;
        setstate((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value
                }
            })
    }

    
    return (
        <>
            <form onSubmit={subitfunction} style={{minWidth:"30%",maxWidth:"80%",border:"1px solid #0d6efd ",overflow:"hidden",borderRadius:"10px"}}>
            <div className="row" style={{background:"#0d6efd"}}><h3 style={{textAlign:"center",color:"white",textDecoration:"underlined"}}>Add New MeetUp</h3></div>
 <div style={{width:"100%",textAlign:"center"}}>
 <input id="title" onChange={handle} type="text" placeholder="MeetUp Heading"  required autoComplete="off"/>
 <br/>
            <input id="description" onChange={handle} type="text" placeholder="MeetUp description"  required autoComplete="off"/>

            <br/>

 <input id="address" onChange={handle} type="text" placeholder="Address" required autoComplete="off"/>

 <br/>
 <button type="submit" className="btn btn-outline-primary m-3">Post</button>

 
 </div>

            </form>
        </>
    )
}

export default MeetupForm

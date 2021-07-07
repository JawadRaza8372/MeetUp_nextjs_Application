import React from 'react'
import { Fragment } from 'react'
import MeetupItem from './MeetupItem'
function MeetupList({list}) {
    return (
        <>
               <div className="row">
<div className="col-10 mx-auto">
<div className="row">

            {list && list.map((item,index)=>(<MeetupItem id={item.id} key={item.id} index={index} imagelink={item.imaglink} heading={item.title} />))
            }
            </div></div></div>
        </>
    )
}

export default MeetupList

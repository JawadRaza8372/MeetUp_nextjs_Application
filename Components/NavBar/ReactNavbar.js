import React from 'react'
import Link from "next/link"
import {Navbar,Nav} from "react-bootstrap"
function ReactNavbar() {
    return (
<Navbar className="border" bg="primary" variant="dark" expand="lg">
  <Navbar.Brand href="/"><h3 style={{marginLeft:"20px"}}>My Meet Ups</h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav style={{marginLeft:"auto",marginRight:"20px"}}>
    <Link href="/"><span className="navbtn">All MeetUps</span></Link>
    <Link href="/New_meetup"><span className="navbtn">New Meetup</span></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default ReactNavbar

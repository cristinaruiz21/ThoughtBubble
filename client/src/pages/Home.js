import React from "react"
import Button from "../components/Button"
import {Container, Row} from "../components/Grid"
import {Link} from "react-router-dom"
import Jumbotron from 'react-bootstrap/Jumbotron'
// import API from "../utils/API"
// import thoughts from "./Thoughts"



function Home ()
    {

return(
    <div>
    <Jumbotron className="jumbotron-home">Select Your Bubble Board</Jumbotron>
    {/* style={{background : "green", textAlign:"center",color:"black",margin:30, padding:10,borderRadius: 20}} */}

        <Container style={{marginTop:30}} >
            <Row>
                <div className="col-md-6 offset-md-3">
               

   <Link to={"/home/Thoughts"} ><Button className="btn btn-primary btn-lg btn-block board bubble"><span>Everyday Thoughts</span></Button></Link><br />
   <Link to={"/home/Fitness"} ><Button className="btn btn-primary btn-lg btn-block board bubble"><span>Fitness</span></Button></Link><br />

   <Link to={"/home/Food"} ><Button className="btn btn-primary btn-lg btn-block board bubble"><span>Food</span></Button></Link><br />


    </div>
    </Row>
    </Container>


    </div>

    
    
)


    }
export default Home
import React from "react"
import Button from "../components/Button"
import {Container, Row} from "../components/Grid"
import {Link} from "react-router-dom"
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API"
// import thoughts from "./Thoughts"



function Home ()
    {

return(
    <div>
    <Jumbotron />
    {/* style={{background : "green", textAlign:"center",color:"black",margin:30, padding:10,borderRadius: 20}} */}

        <Container style={{marginTop:30}} >
            <Row>
                <div className="col-md-6 offset-md-3">
               

   <Link to={"/home/thoughts"} ><Button className="btn btn-danger btn-lg btn-block board" style={{background:"#fcd5ce"}}>Everyday Thoughts</Button></Link><br />
   <Link to={"/home/fitness"} ><Button className="btn btn-primary btn-lg btn-block board">Fitness</Button></Link><br />

   <Link to={"/home/food"} ><Button className="btn btn-primary btn-lg btn-block board" >Food</Button></Link><br />


    </div>
    </Row>
    </Container>


    </div>

    
    
)


    }
export default Home
import React from "react"
import Button from "../components/Button"
import {Container, Row} from "../components/Grid"
import {Link} from "react-router-dom"
import API from "../utils/API"
import thoughts from "./Thoughts"



function Home ()
    {

return(
    <div>
    <h4  style={{background : "green", textAlign:"center",color:"white",}}>Select your Bubble  Board</h4>

        <Container style={{marginTop:30}} >
            <Row>
                <div className="col-md-6 offset-md-3">
               

   <Link to={"/home/thoughts"} ><Button className="btn btn-primary btn-lg btn-block board">Everyday Thoughts</Button></Link><br />
   <Link to={"/home/fitness"} ><Button className="btn btn-primary btn-lg btn-block board">Fitness</Button></Link><br />

   <Link to={"/home/food"} ><Button className="btn btn-primary btn-lg btn-block board" >Food</Button></Link><br />


    </div>
    </Row>
    </Container>


    </div>

    
    
)


    }
export default Home
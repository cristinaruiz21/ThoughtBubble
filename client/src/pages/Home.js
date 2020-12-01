import React from "react"
import Button from "../components/Button"
import {Container, Row, Col} from "../components/Grid"


function Home ()
    {

return(
    <div>
    <h4  style={{background : "green", textAlign:"center",color:"white",}}>Select your Bubble  Board</h4>

        <Container >
            <Row>
                <div className="col-md-6 offset-md-3">

    <Button >Everyday Thoughts</Button>
    <Button >Fitness</Button>
    <Button >Food</Button>
    </div>
    </Row>
    </Container>


    </div>

    
    
)


    }
export default Home
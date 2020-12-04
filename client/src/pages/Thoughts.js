import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import API from "../utils/API";
import {Link,useParams} from 'react-router-dom';
import Jumbotron from "../components/Jumbotron";

function Thoughts() {
    const [thought, setThought] = useState({})
    const {category} = useParams()


    useEffect(() => {
      API.getBubbles()
            .then(res => setThought(res.data))
                // console.log(cards)}

            .catch(err => console.log(err));

    }, [])



    return (

      

            
            thought.length ? (
                <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Jumbotron>
                    <h1>Everyday Thoughts</h1>
                </Jumbotron>
                 
                    {thought.filter(unique => unique.category===category).map(book => (
                        <Card key={book._id} className="box-thought">
                            <Card.Img variant="bottom" src={book.url  || "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"} className="img-thought" />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.caption}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
                    

                </div>
                  <Link to ={"/bubbleform/"+category}><button>Add your bubble</button></Link>
                  </div>


            ) : (
                    <h3 >No bubbles saved</h3>
                )
            

            

    )

  

}

export default Thoughts;
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";


function Thoughts() {
    const [thought, setThought] = useState({})


    useEffect(() => {
      API.getBubbles()
            .then(res => setThought(res.data))

            .catch(err => console.log(err));

    }, [])



    return (

    
        
            thought.length ? (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Jumbotron>
                        <h1>Fitness</h1>
                    </Jumbotron>
                    {thought.map(book => (


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

            ) : (
                    <h3 >No bubbles saved</h3>
                )
        

    )

 

}

export default Thoughts;
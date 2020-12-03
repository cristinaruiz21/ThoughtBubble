import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import API from "../utils/API";


function Thoughts() {
    const [thought, setThought] = useState({})


    useEffect(() => {
      API.getBubbles()
            .then(res => setThought(res.data))
                // console.log(cards)}

            .catch(err => console.log(err));

    }, [])



    return (

      

        
            thought.length ? (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {thought.map(book => (


                        <Card key={book._id} className="box-thought">
                            <Card.Img variant="bottom" src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com

C/O https://placeholder.com/" className="img-thought" />
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
                    <h3 >No books saved</h3>
                )
        

    )

  

}

export default Thoughts;
import React from 'react';
import Card from 'react-bootstrap/Card';


function Fitness() {
    
    const cardInfo = [
        { image: "https://i.insider.com/5ae091d7bd967121008b4646?width=750&format=jpeg&auto=webp", title: "Post Thanksgiving", text: "Working out on Monday after Thanksgiving!" },
        { image: "https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2018/04/1140-workout-buddy.jpg", title: "Workout Buddy", text: "When you and your training partner both pr!" },
        { image: "https://cdn1.gringoslocos6.com/wp-content/uploads/2016/05/29233357/Crying-Child.jpg", title: "Betrayal", text: "When your gym partner goes to the gym without you!" },
    ];

    const renderCard = (card, index) => {
        return (
            

            <Card key={index} className="box-thought">
                <Card.Img variant="bottom" src={card.image} className="img-thought" />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }

    return (
        <div className="grid-thought">{cardInfo.map(renderCard)}</div>
    )
    
}

export default Fitness;
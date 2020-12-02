import React from 'react';
import Card from 'react-bootstrap/Card'

function Thoughts() {
    
    const cardInfo = [
        {image: "https://smartbear.com/smartbear/media/blog/wp/quality-history.jpg", title: "Thinking", text: "Today's class was difficult!" },
        {image: "https://lh3.googleusercontent.com/proxy/dKihNHS2iXm_RLSHS1msB7IH3UY-tRAYTlO7nu3nW80HCUzve-EBC5lNkj1KJIop5DcChUpH65_SBNVDVrgdyVi9c4PZvqY", title: "Bad Drivers", text: "Why is it that every car has a turn signal and no one uses it!" },
        {image: "https://images.unsplash.com/photo-1554672723-b208dc85134f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", title: "Burning Money", text: "I just bought a macbook that I now have to buy more apple products just to connect it to everything!" },
    ];

    const renderCard = (card, index) => {
        return (
            <Card key={index} className="box-thought">
                <Card.Img variant="bottom"  src={card.image} className="img-thought"/>
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

export default Thoughts;
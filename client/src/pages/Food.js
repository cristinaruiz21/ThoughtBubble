import React from 'react';
import Card from 'react-bootstrap/Card'

function Food() {
    
    const cardInfo = [
        {image: "https://media-cdn.tripadvisor.com/media/photo-s/16/b5/f2/89/photo0jpg.jpg", title: "WhataBeezy", text: "WHATABURGER is better than In-n-Out!!" },
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXIy6jWLbuF3QdQsHcja55s9RYCX5z62mTw&usqp=CAU", title: "Thanksgiving", text: "When your waiting to eat on Thanksgiving!" },
        {image: "https://afoodloverskitchen.com/wp-content/uploads/2019/04/spaghetti-meal-sauce5.jpg", title: "I made Dinner!", text: "When I finally perfected my spaghetti!" },
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

export default Food;
import React, { Component } from 'react';
import axios from 'axios';


export default class Fitness extends Component {

    constructor() {
        super();
        this.state = {

            id: "",
            title: "",
            description: "",
            image: "",
        }
    }

    handleButtonClick = () => {
        axios.get("/notknown").then(response => {
            console.log(response.data)
            this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                image: response.data.image 
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.id}</h1>
                <h1>{this.state.title}</h1>
                <h1>{this.state.description}</h1>
                <h1>{this.state.image}</h1>
            </div>
        )
    }

}


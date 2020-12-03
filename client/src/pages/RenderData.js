import React, { Component } from 'react';
import axios from 'axios';


export default class Fitness extends Component {

    constructor() {
        super();
        this.state = {

            title: "",
            caption: "",
            image: "",
        }
    }

    getData = () => {
        axios.get("/http://localhost5001/bubbles").then(response => {
            console.log(response.data)
            this.setState({
                title: response.data.title,
                caption: response.data.caption,
                image: response.data.image 
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.caption}</h1>
                <h1>{this.state.image}</h1>
            </div>
        )
    }

}


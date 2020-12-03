import React, { useState, useEffect } from 'react';
import Deletebtn from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Fitness() {
    const [fitness, setFitness] = useState([])
    const [formObject, setformObject] = useState({})

    useEffect(() => {
        loadFitness()
    }, [])

    function loadFitness() {
        API.getFitness()
        .then(res => 
            setFitness(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteFitness(id) {
        API.deleteFitness(id)
          .then(res => loadFitness())
          .catch(err => console.log(err));
      }



      return (





      )






}
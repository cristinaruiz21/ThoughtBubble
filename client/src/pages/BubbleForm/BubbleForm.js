import React ,{useState}from "react"
import { Row, Col, Container } from "../../components/Grid";
import API from "../../utils/API"
import {Link} from "react-router-dom"
import{Input} from "../../components/Form"
import Button from "../../components/Button"
import "./BubbleForm.css"

function BubbleForm() {

const[search , setSearch] =useState({})







function handleInputChange(event){
    const {name , value} = event.target;
    setSearch({...search , [name]:value})
    
};

console.log(search);


function handleFormSubmit(event){
    event.preventDefault();
    if(search.title){
        API.saveBubble({
            title : search.title,
            caption : search.caption,
            image : search.image
        })
        .then(res=>{<Link to="/home" />})
        .catch(err => console.log(err))
    }
}










    return (
        <div classname="parent">
        <Container>
            <Row>
                <div className="card col-md-8 mx-auto col-md-offset-3">
                    <h2 className="text-center">Create your Bubble</h2>
                    <form>
                        {/* <div class="form-group">
                            <label for="formGroupExampleInput">Title</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" 
                            onChange ={handleInputChange}
                            name="title"
                            placeholder="title(required)"
                            

                            />
                        </div> */}

                        <Input 
                        label = "Title"
                         onChange ={handleInputChange}
                         name="title"
                         placeholder="title(required)"
                        />
                        <div className="form-group">
                            <label for="formGroupExampleInput">Description</label>

                            <textarea className="form-control" rows="5" 
                              onChange ={handleInputChange}
                              name="caption"
                              placeholder="caption"
                              />


                        </div>
                        <Button  className="btn btn-outline-primary btn-sm neweffects">upload image</Button>

                        <div className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"
                            disabled={(!search.title)}
                            onClick ={handleFormSubmit}
                            
                            >create bubble</button>
                        </div>
                    </form>

                </div>
            </Row>
        </Container>
        </div>

    )
}


export default BubbleForm
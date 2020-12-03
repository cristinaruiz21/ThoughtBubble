import React ,{useState}from "react"
import axios from 'axios'
import { Row, Col, Container } from "../../components/Grid";
import API from "../../utils/API"
import {Link} from "react-router-dom"
import{Input} from "../../components/Form"
import Button from "../../components/Button"
import "./BubbleForm.css"
import {Redirect} from 'react-router-dom'

function BubbleForm() {
const[search , setSearch] =useState({})
const[imgData, setImgD]=useState('')
const[upImg, setUp]=useState("")
const[showUp, setShow]=useState(true)
const[redirect,setRedirect]=useState(false)


function handleInputChange(event){
    const {name , value} = event.target;
    setSearch({...search , [name]:value})
    setImgD(event.target.files)
    
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

const handlefile=(event)=>{
    event.preventDefault()
    setShow(false)
  //################## package file info and send it back
    var formData = new FormData();
    formData.append('file',imgData );
    /////// function for viewing form data
    for (var p of formData) {
      console.log(p);
    }
    axios.post('/api/pics/imgup',formData).then((response)=>{
      console.log (response)
      setUp(response.data)
      setShow(false)
    })
    //##################
}

//////////add url to db
// const addPic=()=>{
//     const pObj={
//       url: upImg
//     }
//     axios.post('/api/pics/dbpic',pObj).then(res=>{
//       console.log(res)
//       setRedirect(true)
//     })
//   }




    return (

        <Container>
            {redirect?<Redirect push to='/'/>:<div></div>}
            {showUp?
            <Row>
                <div className="card col-md-8 mx-auto col-md-offset-3">
                    <h2 className="text-center">Create your Bubble</h2>
                    <form>
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
                        <input id="imgI" type='file' accept="image/*" name="file" encType="multipart/form-data" onChange={handleInputChange} />
                        <Button  className="btn btn-outline-primary btn-sm" id="upload" type='button' onClick={handlefile}>upload image</Button>

                        <div className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"
                            disabled={(!search.title)}
                            onClick ={handleFormSubmit}
                            
                            >create bubble</button>
                        </div>
                        
                    </form>
                </div>
            </Row>:
            <></>
            }
            {/* {!showUp?
            <Row>
            <div className="card col-md-8 mx-auto col-md-offset-3">
                <h2 className="text-center">Create your Bubble</h2>
                <form>
                    <img id="upImg"src={upImg}/>
                    <Button id='addPic' onClick={addPic}>Add To Bubble</Button>
                    <div className="text-center">
                        <button type="button" class="btn btn-primary btn-sm"
                        disabled={(!search.title)}
                        onClick ={handleFormSubmit}
                        
                        >create bubble</button>
                    </div>
                    
                </form>
            </div>
        </Row>:
        <></>
            } */}
        </Container>

    )
}


export default BubbleForm
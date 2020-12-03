import React ,{useState}from "react"
import axios from 'axios'
// import { Row, Container } from "../../components/Grid";
// import API from "../../utils/API"
// import {Link} from "react-router-dom"
// import{Input} from "../../components/Form"
// import Button from "../../components/Button"
import "./BubbleForm.css"
import {Redirect} from 'react-router-dom'

function Upform(){
    const[imgData, setImgD]=useState('')
    const[upImg, setUp]=useState("")
    const[title, setTitle]=useState('')
    const[name, setName]=useState('')
    const[caption,setCaption]=useState('')
    const[showUp, setShow]=useState(true)
    const[redirect,setRedirect]=useState(false)

    ////// track change of file input and capture data
    const handleIChange=(event)=>{
      console.log(event.target.files[0])
      setImgD(event.target.files[0])
    }
    ///////// handle form inputs and saves data for sending to db
    const handleDChange=(event)=>{
      let name=event.target.id
      let val=event.target.value
      if (name==="name"){
        setName(val)
      }
      if (name==="title"){
        setTitle(val)
      }
      else if(name==="caption"){
        setCaption(val)
      }
    }
    const handlefile=(event)=>{
      event.preventDefault()
      
      // let data={
      //   name:name,
      //   caption:caption
      // }
    //################## package file info and send it back
      var formData = new FormData();
      formData.append('file',imgData );
      formData.append('name',name)
      formData.append('caption',caption)
      
      // formData.append('title',title)
      /////// function for viewing form data
      for (var p of formData) {
        console.log(p);
      }
      axios.post('/api/bubble/imgup',formData).then((response)=>{
        console.log (response)
        setUp(response.data)
        setRedirect(true)
      })
      //##################
  }
  //////////add url caption and title to db
  const addPic=()=>{
    const pObj={
      title:title,
      url: upImg,
      caption:caption
    }
    axios.post('/api/bubble/dbpic',pObj).then(res=>{
      console.log(res)
      setRedirect(true)
    })
  }
  return(
      <div>
        {redirect?<Redirect push to='/'/>:<div></div>}
        {showUp?
        <div className="row space">
          <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">  
            < div  className="card">
              <h1>Upload Image</h1>
              <p>please use optimized photos to keep size down</p>
              <input id='name' name='name' type='text' placeholder="Name" value={name} onChange={handleDChange} />
              <label id="imgI">
              <input  type='file' accept="image/*" name="file" encType="multipart/form-data" onChange={handleIChange} />
              </label>
              {/* <input id="imgI" type='file' accept="image/*" name="file" encType="multipart/form-data" onChange={handleIChange} /> */}
              <textarea id='caption' name='caption' type='text' placeholder="Caption this" value={caption}onChange={handleDChange} />
              <button id="upload"type='button'  onClick={handlefile}>Upload</button>
            </div>
          </div>
        </div>:
            <>
            </>
        }
            {!showUp?
              <div className="row space">
              <div className="col-xs-10 offset-xs-1 col-md-6 offset-md-3">
                  <div className="card">
                        <input id='title' name='title' type='text' placeholder="Title" value={title} onChange={handleDChange} />
                        <img id="upImg"src={upImg} alt="image-not-found"/>
                        <textarea id='caption' name='caption' type='text' placeholder="Caption this" value={caption}onChange={handleDChange} />
                        <button id='addPic' onClick={addPic}>Add To Pictures</button>                      
                  </div>
              </div>          
          </div>:
          <></>
            }
      </div>
  )
}
export default Upform;

// function BubbleForm() {
// const[search , setSearch] =useState({})
// const[imgData, setImgD]=useState('')
// const[upImg, setUp]=useState("")
// const[showUp, setShow]=useState(true)
// const[redirect,setRedirect]=useState(false)


// function handleInputChange(event){
//     const {name , value} = event.target;
//     setSearch({...search , [name]:value})
//     setImgD(event.target.files)
//     console.log(imgData)
    
// };

// console.log(search);


// function handleFormSubmit(event){
//     event.preventDefault();
//     if(search.title){
//         API.saveBubble({
//             title : search.title,
//             caption : search.caption,
//             image : search.file
//         })
//         .then(res=>{<Link to="/home" />})
//         .catch(err => console.log(err))
//     }
// }

// const handlefile=(event)=>{
//     event.preventDefault()
//     setShow(false)
//   //################## package file info and send it back
//     var formData = new FormData();
//     formData.append('file',imgData );
//     /////// function for viewing form data
//     for (var p of formData) {
//       console.log(p);
//     }
//     axios.post('/api/bubbles/imgup',formData).then((response)=>{
//       console.log (response)
//       setUp(response.data)
//       setShow(false)
//     })
//     //##################
// }

// ////////add url to db
// const addPic=()=>{
//     const pObj={
//       url: upImg
//     }
//     axios.post('/api/bubbles/dbpic',pObj).then(res=>{
//       console.log(res)
//       setRedirect(true)
//     })
//   }




//     return (
//         <div classname="parent">
//         <Container>
//             {redirect?<Redirect push to='/'/>:<div></div>}
//             {showUp?
//             <Row>
//                 <div className="card col-md-8 mx-auto col-md-offset-3">
//                     <h2 className="text-center">Create your Bubble</h2>
//                     <form>
//                         <Input 
//                         label = "Title"
//                          onChange ={handleInputChange}
//                          name="title"
//                          placeholder="title(required)"
//                         />
//                         <div className="form-group">
//                             <label for="formGroupExampleInput">Description</label>

//                             <textarea className="form-control" rows="5" 
//                               onChange ={handleInputChange}
//                               name="caption"
//                               placeholder="caption"
//                               />


//                         </div>
//                         <input id="imgI" type='file' accept="image/*" name="file" encType="multipart/form-data" onChange={addPic} />
//                         <Button  className="btn btn-outline-primary btn-sm" id="upload" type='button' onClick={handlefile}>upload image</Button>

//                         <div className="text-center">
//                             <button type="button" class="btn btn-primary btn-sm"
//                             disabled={(!search.title)}
//                             onClick ={handleFormSubmit}
                            
//                             >create bubble</button>
//                         </div>
                        
//                     </form>
//                 </div>
//             </Row>:
//             <></>
//             }
//             {!showUp?
//             <Row>
//             <div className="card col-md-8 mx-auto col-md-offset-3">
//                 <h2 className="text-center">Create your Bubble</h2>
//                 <form>
//                     <img id="upImg"src={upImg}/>
//                     <Button id='addPic' onClick={addPic}>Add To Bubble</Button>
//                     <div className="text-center">
//                         <button type="button" class="btn btn-primary btn-sm"
//                         disabled={(!search.title)}
//                         onClick ={handleFormSubmit}
                        
//                         >create bubble</button>
//                     </div>
                    
//                 </form>
//             </div>
//         </Row>:
//         <></>
//             }
//         </Container>
//         </div>

//     )
// }


// export default BubbleForm;
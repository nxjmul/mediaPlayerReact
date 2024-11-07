import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {
  const [invalidYoutubeLink,setInvalidYoutubeLink] = useState(false)
  const[videoDetails,setvideoDetails]=useState({caption:"",imgURL:"",youtubeLink:""})
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
  console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
  const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
  setInvalidYoutubeLink(false)
  setvideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
  
}else{
  setInvalidYoutubeLink(true)
  setvideoDetails({...videoDetails,youtubeLink:""})

}
}

const handleuploadVideo = async ()=>{
  const {caption,imgURL,youtubeLink} = videoDetails
  if(caption && imgURL && youtubeLink) {

    // alert("proced to store")
    try{
      const result = await saveVideoAPI(videoDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("video uploaded successfully!!!")
        handleClose()
        setAddResponseFromHome (result)
      }else{
        console.log(result);
        
      }
      
    }catch(err){
      console.log(err);
      
    }
  }else{
    alert("please fill the form!!!")
  }
}
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>upload video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className="border rounded p-3">
      <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel  className='mt-2' controlId="floatingUrl" label="Video Image URL">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,imgURL:e.target.value})} type="text" placeholder="Video Image URL" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtude Link">
        <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtude Link" />
      </FloatingLabel>
      {
        invalidYoutubeLink &&
        <div className='text-danger fw-bolder mt-2'>Invail youtube Link.......please try with</div>
      }
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
       </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Add
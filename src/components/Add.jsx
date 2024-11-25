//import React from 'react'
import { useState } from 'react';
import {faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {
    const [show, setShow] = useState(false);
    const [videoDetails,setvideoDetails] = useState({
      caption:'',
      imgUrl:'',
      embededUrl:'',
})


 const saveVideo = async()=>{
  const {caption,imgUrl,embededUrl } =videoDetails;
  if(!caption || !imgUrl || !embededUrl){
    toast.info('Please Complete the form')
    
  }
 else{
  if(embededUrl.startsWith('https://youtu.be/'))
  {
     let link=`https://www.youtube.com/embed/${embededUrl.slice(17,28)}`
     const result = await addVideoApi({caption,imgUrl,embededUrl:link})
  console.log(result);
  if(result.status>=200 && result.status<300) {
    toast.success('Video added successfully');
    handleClose()
    setAddStatus(result)

     
  }
  else{
   toast.error("Something Went Wrong")
    handleCancel()
  }
  }
  else
  {
    let link=`https://www.youtube.com/embed/${embededUrl.slice(-11)}`
    const result = await addVideoApi({caption,imgUrl,embededUrl:link})
    console.log(result);
    if(result.status>=200 && result.status<300) {
      toast.success('Video added successfully');
      handleClose()
      setAddStatus(result)
  
       
    }
    else{
      toast.error("Something Went Wrong")
      handleCancel()
    }
  }
  //  const result = await addVideoApi(videoDetails)
  //  console.log(result);
   
 }

 }


    const handleClose = () => {
      setShow(false)
      handleCancel();

    };
    const handleShow = () => setShow(true);

    const handleCancel = () => {
      setvideoDetails({
        caption:'',
      imgUrl:'',
      embededUrl:'',
      })
    }
  
  return (
    <>
      <h3 onClick={handleShow}><span className='d-md-inline d-none'>Upload New Video</span>  <FontAwesomeIcon  icon={faCloudArrowUp} className="ms-3" /></h3>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} /> <span className='d-md-inline d-none'>Upload Videos</span></Modal.Title>
        </Modal.Header>
        <Modal.Body> Fill the the following Details
            <form className='border rounded-3 mt-3 p-3 '>
                <input type="text" id='caption'value={videoDetails.caption} placeholder=' Video Caption' className="form-control mt-1" onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})}  />
                <input type="text" id='imgUrl'value={videoDetails.imgUrl} placeholder=' Video Image' className="form-control mt-3"onChange={(e)=>setvideoDetails({...videoDetails,imgUrl:e.target.value})}  />
                <input type="text"id='embededurl'value={videoDetails.embededUrl} placeholder=' Video URL' className="form-control mt-3 "onChange={(e)=>setvideoDetails({...videoDetails,embededUrl:e.target.value})}  />
                  <p id='error'></p>   

            </form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={saveVideo}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored'autoClose={2000} />
    </>
  )
}

export default Add

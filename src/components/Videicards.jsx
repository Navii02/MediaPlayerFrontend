//import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeVideoApi,addHistoryApi } from '../services/allApi';

function Videicards({videoDetails,setDeleteStatus,present}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    const caption=videoDetails?.caption
    const url=videoDetails?.embededUrl
    const time=new Date()
    const timeStamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    //console.log(timeStamp);
    

    const reqBody={
      caption,
      url,
      timeStamp

    }
     const result= await addHistoryApi(reqBody)
     //console.log(result);
    

  }

  const handleDelete = async(id)=>{
    const result= await removeVideoApi(id);
    console.log(result);
    if(result.status>=200&&result.status<300){
    setDeleteStatus(true)
    }
    
  } 
  const videoDrag =(e,vDetails)=>
  {
    console.log(e);
    console.log(vDetails);
    e.dataTransfer.setData('VideoDetails',JSON.stringify(vDetails));
    
  }

  return (
    <>
    <Card style={{ width: '100%' }} className='mt-2' draggable onDragStart={(e)=>videoDrag(e,videoDetails)}>
      {!present &&<Card.Img  onClick={handleShow} variant="top" heigh src={videoDetails?.imgUrl} style={{height:'300px'}} />}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text>{videoDetails?.caption}</Card.Text>
        
        {!present &&<Button onClick={()=>handleDelete(videoDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src={`${videoDetails?.embededUrl}?autoplay=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
     
      </Modal>
    </>
  )
}

export default Videicards

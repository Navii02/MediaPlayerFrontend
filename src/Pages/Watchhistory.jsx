//import React from 'react'
import { faHouse,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { getHistoryApi,removeHistoryApi } from '../services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Watchhistory() {

  const [DeleteStatus,setDeleteStatus]=useState(false)

  const [allVideo ,setAllVideo] =useState([])
   const getAllHistory= async ()=>{
     const result = await getHistoryApi()
    console.log(result.data);
    setAllVideo(result.data)
    
  }
  console.log(allVideo);
  
  useEffect(()=>{
    getAllHistory()
  },[DeleteStatus])

  const HandleDelete= async (id)=>{
   
    
    const result = await removeHistoryApi(id)
    console.log(result);
    if(result.status>=200&&result.status<300){
      setDeleteStatus(true)
      }
      else{
        toast.error("Something went Wrong")
      }
  }

  
  return (
    <>
   <div className="d-flex justify-content-between px-5 mt-5">
    <h4>Watch History</h4>
    <Link to={'/home'} style={{textDecoration:'none'}}><h4><FontAwesomeIcon icon={faHouse}className='me-2'  /><span className='d-md-inline d-none'>Back Home</span></h4></Link>
   </div>
{allVideo?.length >0 ?<div className="container-fluid">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <table className="table table-bordered mt-5 table-responsive">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Caption</th>
            <th className="text-center">
              Url
            </th>
            <th className="text-center">Time Stamp</th>
            <th className="text-center"> Action</th>
          </tr>
        </thead>
        <tbody>
         {allVideo?.map((item,index)=>( <tr>
            <td className="text-center">{index+1}</td>
            <td className="text-center">{item.caption}</td>
            <td className="text-center"><Link to={item.url}>{item.url}</Link></td>
            <td className="text-center">{item.timeStamp}</td>
            <td className="text-center">
               <button onClick={()=>HandleDelete(item?.id)}  className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
          </tr>))}
        </tbody>
      </table>
    </div>
    <div className="col-md-1"></div>
  </div>
</div>
:
<h2 className='text-center text-danger'> No Watch History</h2>}
<ToastContainer position='top-center' theme='colored'autoClose={2000} />

    </>
  )
}

export default Watchhistory

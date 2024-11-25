//import React from 'react'

import Videicards from "./Videicards";
import { getvideoApi,updateCategoryApi } from "../services/allApi";
import { useEffect, useState } from "react";

function Allvideos({addStatus,setCategoryDeleteStatus}) {
  const [video, setvideo] = useState([]);
  const [deleteStatus,setDeleteStatus] = useState(false);

  const getAllVideo = async () => {
    const result = await getvideoApi();
    // console.log(result);
    setvideo(result.data);
  };
  console.log(video);

  useEffect(() => {
    getAllVideo();
  }, [addStatus,deleteStatus]);
  
  const DragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async(e) => {
   
    const {categoryDetails,videoDetails} = JSON.parse(e.dataTransfer.getData("Details"));
    console.log(categoryDetails);
   console.log(videoDetails);
   const result=categoryDetails.allVideos.filter((video) => video.id !==videoDetails.id )
    // console.log(CategoryDetails);
    const reqBody={
      Category: categoryDetails.Category,
      allVideos:result,
      id:categoryDetails.id
    }
    const response =await updateCategoryApi(categoryDetails.id, reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300){
      setCategoryDeleteStatus(response)
    }
    
   
 

  //  if (categoryDetails.allVideos.find((item) => item.id ==videoDetails.id))
  //     {
        
  //  const CategoryDetails=categoryDetails.allVideos.filter((video) => video.id !==videoDetails.id )
  //   console.log(CategoryDetails);
  

  //     }
  //     else{
  //       alert('Something went wrong')
  //     }
    
   
   
   
  }
  return (
    <>
     <div droppable onDragOver={(e) => DragOver(e)} onDrop={(e) => videoDrop(e)}>
      <h3 className="mt-5">All Videos</h3>
     
      {video?.length > 0 ?
                <div className="container-fluid mt-5">
                    <div className="row">
                        {video?.map((item) => (
                            <div className="col-md-3 p-3">
                                <Videicards videoDetails ={item} setDeleteStatus={setDeleteStatus} />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col md-4"></div>
                        <div className="col md-4">
                            <img src="https://th.bing.com/th/id/OIP.0_NBShQOcmwpUv-GNVUSQwAAAA?rs=1&pid=ImgDetMain" alt="no image" className="w-100" style={{
                                height: '200px', width: '200px'
                            }} />
                            <h5 className="text-center text-danger mt-3"> No Videos Added Yet ...</h5>
                        </div>

                        <div className="col md-4"></div>
                    </div>

                </div>}
                </div>
    </>
  );
}

export default Allvideos;

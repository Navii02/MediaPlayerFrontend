//import React from 'react'
import { useState, useEffect } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Videicards from "./Videicards";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addCategoryApi,
  getCategoryApi,
  deleteCategoryApi,
  updateCategoryApi,
} from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Category({CategoryDeleteStatus}) {
  const [show, setShow] = useState(false);
  const [Catagery, setCatagery] = useState("");
  const [AllCategory, setAllCategory] = useState([]);
  const [CatageryStatus, setCatageryStatus] = useState({});
  const [deleteStatus, setDeleteStatus] = useState({});
  const [CategoryUpdateStatus, setCategoryUpdateStatus] = useState({});
 


  const handleClose = () => {
    setShow(false);
    HandleCancel();
  };
  const handleShow = () => setShow(true);
  console.log(Catagery);
  const HandleCancel = () => {
    setCatagery("");
  };
  const AddCategory = async () => {
    if (!Catagery) {
      alert("Please Fill the Catagory ");
    } else {
      const reqBody = {
        Category: Catagery,
        allVideos: [],
      };
      const result = await addCategoryApi(reqBody);
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Category added successfully");
        handleClose();
        setCatageryStatus(result);
      }
    }
  };
  const getCategory = async () => {
    const result = await getCategoryApi();
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data);

      //console.log(AllCategory);
    }
  };

  //console.log(result.data);}
  const HandleDelete = async (id) => {
    const result = await deleteCategoryApi(id);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus({ result });
    }
  };

  useEffect(() => {
    getCategory();
  }, [CatageryStatus, deleteStatus, CategoryUpdateStatus,CategoryDeleteStatus]);

  const videoOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, Categorydetails) => {
    console.log(Categorydetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(videoDetails);

    // Categorydetails = {
    //   ...Categorydetails,allVideos: [...Categorydetails.allVideos,videoDetails],
    // };
    // console.log(Categorydetails);

    if (Categorydetails.allVideos.find((item) => item.id == videoDetails.id)) {
      alert("Video Already In the Category");
    } else {
      Categorydetails.allVideos.push(videoDetails);
      const result = await updateCategoryApi(
        Categorydetails.id,
        Categorydetails
      );
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryUpdateStatus(result);
      } else {
        alert("Something went wrong");
      }

      // console.log(Categorydetails);
    }
 
  };
  const videoDrag = (e, videoDetails, categoryDetails) => {
    console.log(e, videoDetails, categoryDetails);
    const details ={
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
  };
  return (
    <>
      <h3 className="mt-5"> Catageory</h3>
      <button className="btn btn-warning mt-4 w-100 " onClick={handleShow}>
        {" "}
        Add Catagery
      </button>
      {AllCategory?.length > 0 ? (
        AllCategory?.map((item) => (
          <div
            className="border border-secondary p-3 rounded mt-4"
            droppable
            onDragOver={(e) => videoOver(e)}
            onDrop={(e) => videoDrop(e, item)}
          >
            <div className="d-flex justify-content-between">
              <h4>{item.Category}</h4>
              <button
                className="btn btn-danger"
                onClick={() => HandleDelete(item?.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            {item?.allVideos.length > 0 &&
              item?.allVideos.map((video) => (
                <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
                  <Videicards videoDetails={video} present={true} />
                </div>
              ))}
          </div>
        ))
      ) : (
        <h3 className="text-danger">No Categeory added Yet....</h3>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3 border rounded border-dark">
            <input
              type="text"
              value={Catagery}
              placeholder="Enter Category Name"
              className="form-control"
              onChange={(e) => setCatagery(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={HandleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={AddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Category;

import {commonApi} from './commonApi'
import {serverUrl} from './server'

export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/video`,reqBody);
}
 export const getvideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/video`,"")
 }

 export const removeVideoApi = async(id)=>{
        return await commonApi('DELETE',`${serverUrl}/video/${id}`,{})
 }

//api to add video to history
export const addHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody);
}

//api to get video history
export const getHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

export const removeHistoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

export const addCategoryApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}
export const getCategoryApi = async ()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}
//api to delete catagory
export const deleteCategoryApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}
//api to update category
export const updateCategoryApi = async(catagoryid,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${catagoryid}`,reqBody)
}
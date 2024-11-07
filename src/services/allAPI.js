import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveVideoAPI =async (videoDetails)=>{
  return await  commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}
export const getALLVideosAPI = async ()=>{
  return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}
// saveHistory-post
export const saveHistoryAPI =async (historyDetails)=>{
  return await  commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}
// getAllhistory
export const getAllHistoryAPI =async ()=>{
  return await  commonAPI("GET",`${SERVERURL}/history`,"")
}
// deletehistory
export const deleteHistoryAPI =async (id)=>{
  return await  commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}
// remove
export const removeVideoAPI =async (id)=>{
  return await  commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}
// 
export const saveCategoryAPI =async (categoryDetails)=>{
  return await  commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}
// 
export const getAllCategoryAPI =async ()=>{
  return await  commonAPI("GET",`${SERVERURL}/categories`,{})
}
// 

export const deleteCatgoryAPI =async (id)=>{
  return await  commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}
// 
export const updateCatgoryAPI =async (categoryDetails)=>{
  return await  commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}
//
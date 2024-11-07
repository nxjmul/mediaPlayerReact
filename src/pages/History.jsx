import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI';


const History = () => {
  const [allVideoHistory,setallVideoHistory] = useState([])
  useEffect(()=>{
    getAllHistory()

  },[])
  console.log(allVideoHistory);
  

  const getAllHistory = async ()=>{
    try{
      const result = await getAllHistoryAPI()
      if(result.status>=200 && result.status<300){
        setallVideoHistory(result.data)
      }else{
      console.log(result);
      }
      }catch(err){
        console.log(err);
        }
    }
    const removeHistory = async (id)=>{
      try{
     await deleteHistoryAPI(id)
     getAllHistory()

      }catch(err){
        console.log(err);
        
      }
    }
  
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='container my-5 table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Captiom</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
       {
      allVideoHistory?.length>0?
      allVideoHistory?.map((videoDetails,index)=>(
        <tr key={videoDetails?.id}>
        <td>{index+1}</td>
        <td>{videoDetails?.caption}</td>
        <td><a target='_blank' href="https://youtu.be/P6yGr0zhuQI?t=1">{videoDetails?.youtubeLink}</a></td>
        <td>{videoDetails?.timeStamp}</td>
        <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
      </tr>
      ))
      :
      <div className='fw-bolder text-danger'>You didnot watch any video yet!!!!</div>
     }
      </tbody>
     
      </table>
    </div>
  )
}

export default History
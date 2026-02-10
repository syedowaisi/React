import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom"; 

function Github(){
    const data=useLoaderData()
    // const [data,setData]=useState([]) 
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/syedowaisi')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.followers) 
    //         setData(data) 
    //     })
    // },[])

    return(
        <div className="text-center m-4 bg-gray-600">Github followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture" width={200} height={100}></img> 
        </div> 
    )
}

export default Github   
// https://github.com/syedowaisi/React 

export const githubInfoLoader=async() =>{
    const response=await fetch('https://api.github.com/users/syedowaisi') 
    return response.json()   
}

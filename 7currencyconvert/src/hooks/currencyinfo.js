import { useEffect, useState } from "react";
//creating custom hook
function useCurrency(Currency){
    const [data, setdata] =useState({}) 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)    //API Call
        .then((res)=> res.json())
        .then((res)=> setdata(res[Currency]))             
    },[currency])  
    console.log(data);
    return data;
}

export default useCurrency;
import React, { useState } from 'react'
import { useEffect } from 'react'
import RingLoader from "react-spinners/RingLoader";

export default function LoadingScreen() {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },8000)
    },[])
  return (
    <div>
{
    loading ?

<RingLoader
css={override}
size={150}
loading={this.state.loading}
/>

    : 
    <div>Salam Dostlar!</div>
}



    </div>
  )
}

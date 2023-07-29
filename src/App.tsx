import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getFeedData } from './APIs/getFeedData'

function App() {

  useEffect(()=>{
    getFeedData(1)
      .then((res:any)=>{
        console.log(res)
        if(res) console.log(res)
      })
      .catch((err)=>console.log(err))
  },[])

  return (
    <>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

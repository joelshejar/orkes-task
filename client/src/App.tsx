import React,{ useEffect,useState } from 'react'
import './App.css'

import { getFeedData } from './APIs/getFeedData'

function App() {

  const [postList,setPostList] = useState<[]>([])

  useEffect(()=>{
    getFeedData(1)
      .then((res:any)=>{
        if(res) setPostList(res.nodes)
      })
      .catch((err)=>console.log(err))
  },[])

  console.log(postList)

  return (
    <div className='container'>
      <section>
        <article>
          
        </article>
      </section>
    </div>
  )
}

export default App

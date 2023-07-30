import React,{ useEffect,useState } from 'react'
import './App.css'

import { getFeedData } from './APIs/getFeedData'
import PostList from './Components/Posts/PostList'
import InfiniteScroll from './Components/Reusables/InfiniteScroll'

function App() {

  const [postList,setPostList] = useState<[]>([])
  const [page,setPage] = useState<number>(1)

  useEffect(()=>{
    getFeedData(page)
      .then((res:any)=>{
        if(res) setPostList(res.nodes)
      })
      .catch((err)=>console.error(err))
  },[])

  const handleScroll = ()=>{
      setPage(page+1)
      getFeedData(page)
        .then((res:any)=>{
          const newPosts:any = [...postList,...res.nodes]
          if(res) setPostList(newPosts)
        })
        .catch((err)=>{
          if(err.response.status===400){
            setPage(page+2)
            getFeedData(page+1)
              .then((res:any)=>{
                const newPosts:any = [...postList,...res.nodes]
                if(res) setPostList(newPosts)
              })
              .catch((err)=>{
                console.error(err)})
          }
          console.error(err)})
  }

  return (
    <div className='container'>
      <PostList postList={postList}/>
      <InfiniteScroll handlerFunc={handleScroll}/>
    </div>
  )
}

export default App

import React from "react"

import PostCard from "./PostCard"

const PostList = ({postList}:{postList:any[]})=>{

  const renderUpdateCard = ()=>{
    return postList.map((post:any)=>{
      return (
          <PostCard post = {post.node}/>
      )
    })
  }
  return (
    <section>
      {renderUpdateCard()}
    </section>
  )
}

export default PostList
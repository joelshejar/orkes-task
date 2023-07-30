import React from "react";
import { dateFormat } from "../../Utils/dateFormat";

const PostCard = ({post}) =>{
  return (
    <article key={post.nid} className='post'>
        <div className='post__image'>
          <img src={post.fieldPhotoImageSection}></img>
        </div>
        <div className='post__text'>
          <h2 className='post__title'>{post.title}</h2>
          <p className='post__time'>{`${dateFormat(post.lastUpdate)}`}</p>
        </div>
    </article>
  )
}

export default PostCard
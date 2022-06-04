import React from "react";
import Article from './Article'

function ArticleList({ posts }) {
  const articleLists = posts.map(post =>{
    return(
        <Article 
        title={post.title} 
        date={post.date} 
        preview={post.preview} 
        key={post.id} 
        minutes={post.minutes}
        />
    )
})
    
  return (
      <main>
        {articleLists}  
      </main>
  )
}

export default ArticleList;

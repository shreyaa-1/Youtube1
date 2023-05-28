

import React, { useEffect, useState } from 'react';
import './video.css'; // Import your custom CSS file
import ReactPlayer from 'react-player';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
      const data = await response.json();
      setPosts(data.data.posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
     
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <>
          <div className="posts">
            {posts.map((post) => (
              <div className="post" key={post.postId}>
                {/* <div className="thumbnail">
                  <img src={post.submission.thumbnail} alt="Thumbnail" />
                </div> */}
                <div className="video-container">
             <video className="video" controls>
             {/* <ReactPlayer
        url={post.submission.mediaUrl}
        controls={true}
        width="640px"
        height="360px"
       
      /> */}
               <source src={post.submission.mediaUrl} type="video/mp4" />
              </video>
          </div>
                <div className="details">
            
                <img className ="creator-img" src = {post.creator.pic} /> 
               <h3>{post.submission.title} </h3> 
               
                   <p classname="creator-detail">{post.creator.name}</p>
                  
                  {/* <p>{post.submission.description}</p> */}
                  {/* <a href={post.submission.hyperlink}>Watch on YouTube</a> */}
                </div>
              </div>
            ))}
          </div>
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default App;



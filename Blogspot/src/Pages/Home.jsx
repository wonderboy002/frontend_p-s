import React from "react";
import { useState, useEffect } from "react";
import dbService from "../Appwrite/Configuration";
import Postcard from "../Components/Postcard";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return <h1 className="text-2xl font-bold">Login To read Posts</h1>;
  } else {
    return (
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => {
          return (
            <div key={post.$id} className="w-1/3 p-3">
              <PostCard {...post} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;

import React from 'react';
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';

const Center = () => {
  return (
    <>
    <div className='h-dvh w-7/12'>
      <CreatePost/>
      <AllPosts/>
      <AllPosts/>
      <AllPosts/>
      <AllPosts/>
      <AllPosts/>
      <AllPosts/>
      </div>
    </>
  );
}

export default Center;

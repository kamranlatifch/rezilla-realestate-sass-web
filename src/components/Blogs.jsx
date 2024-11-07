import React from 'react';

import imgBlog1 from '../assets/images/Blog1.png';
import imgBlog2 from '../assets/images/Blog2.png';
import imgBlog3 from '../assets/images/Blog3.png';
import BlogCard from './BlogCard';
const Blogs = () => {
  return (
    <div className='blogs'>
      <div className='titles'>
        <h6 className='.h5-md'>WHAT'S TRENDING</h6>
        <h2>Latest Blogs & Posts</h2>
      </div>
      <div className='blogs-cards'>
        <BlogCard
          image={imgBlog1}
          title='Top 10 Home Buying Mistakes to Avoid'
          description='Etiam eget elementum elit. Aenean dignissim dapibus vestibulum'
          date={{ date: 28, day: 'Tue' }}
        />
        <BlogCard
          image={imgBlog2}
          title='How to Stage Your Home for a Quick Sale'
          description='Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.'
          date={{ date: '08', day: 'Mon' }}
        />
        <BlogCard
          image={imgBlog3}
          title='5 Tips for First-Time Home Sellers'
          description='In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.'
          date={{ date: '26', day: 'Wed' }}
        />
      </div>
    </div>
  );
};

export default Blogs;

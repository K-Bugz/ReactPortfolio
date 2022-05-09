import React from 'react';
import BlogCard from './BlogCard';
// function Post(title, des, date) {
//   this.title = title;
//   this.description = des;
//   this.date = date;
// };

const post1 = {
  title: 'Learning React! ',
  date: '5/8/2022',
  des: 'I have done a few simple SPA projects using React and I love it. I really enjoy how reactive it is. Every "page" seems so effortlessly generated. I also enjoy the component programming.',
};
const post2 = {
  title: 'MERN Stack! ',
  date: '5/9/2022',
  des: 'The MERN stack solidified my desire to become a fullstack developer. React and MongoDB are real game changers for me. I prefer MongoDB to the SQL or Sequalize db. ',
};
const post3 = {
  title: 'GraphQL ',
  date: '5/10/2022',
  des: 'Need to get to it before I can write about it!',
};


export default function Blog() {
  return (
    <div>
      <h1>Blog Coding Posts</h1>
      <div className='BoxOfCards'>
      <BlogCard title={post1.title} des={post1.des} date={post1.date}></BlogCard>
      <BlogCard title={post2.title} des={post2.des} date={post2.date}></BlogCard>
      <BlogCard title={post3.title} des={post3.des} date={post3.date}></BlogCard>
      </div>
    </div>
  );
}

import React from 'react';
import BlogCard from './BlogCard';


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
  des: 'After a few days of training, I realized that I require some more studying. I find making the schemas, queires, and mutations straightforward but need more time with virtual DOM and the numerous servers. ',
};


export default function Blog() {
  return (
    <React.Fragment>
      <h1>Blog Coding Posts</h1>
      <div className='BoxOfCards'>
      <BlogCard {...post1}></BlogCard>
      <BlogCard {...post2}></BlogCard>
      {/* <BlogCard title={post2.title} des={post2.des} date={post2.date}></BlogCard> */}
      <BlogCard {...post3}></BlogCard>
      </div>
    </React.Fragment>
  );
}

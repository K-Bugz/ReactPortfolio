import React from 'react';
import BlogCard from './BlogCard';


const post1 = {
  title: 'Learning React! ',
  date: '5/11/2022',
  des: 'have done a few simple SPA projects using React and I love it. I really enjoy how reactive it is. Every "page" seems so effortlessly generated. I also enjoy the component programming. Learning the use effect and state was difficult at first and will continue to practice this. I also learned that you need an effect for each variable your want to manipulate.',
};
const post2 = {
  title: 'MERN Stack! ',
  date: '5/12/2022',
  des: 'The MERN stack solidified my desire to become a fullstack developer. React and MongoDB are real game changers for me. I prefer MongoDB to the SQL or Sequalize db. I need to practice both more but, really like MongoDB right now',
};
const post3 = {
  title: 'GraphQL ',
  date: '5/13/2022',
  des: 'After a few days of training, I really like doing queries and manipulations in Apollo. At first, Apollo’s interface was a little wonky but, I powered through and was able to make all sorts of different queries in my "Connected" group project!',
};
const post4 = {
  title: 'WebScrapping',
  date: '6/6/2022',
  des: 'I have web scrapped on my Raspberry Pi to generate data for my roms but, I thoroughly enjoyed writing my own web scrapper for the group project. I was able to pull from a few different sites to populate my own API! I then used apollo to hit those APIs!!!! Favorite thing I have done in a while in coding!',
};
const post5 = {
  title: 'Job Search & Study',
  date: '6/30/2022',
  des: 'Looking for a job. I made a simple gitHub README.md. It was fun to practice some basic HTML for a change. I also got to put a little of me into the project.',
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
      <BlogCard {...post4}></BlogCard>
      <BlogCard {...post5}></BlogCard>
      </div>
    </React.Fragment>
  );
}

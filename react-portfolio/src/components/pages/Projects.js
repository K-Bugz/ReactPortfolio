import React from 'react';
import ProjectCard from './ProjectCard';


const pro1 = {
  title: 'G.O.A.T Scale',
  img: 'https://www.w3schools.com/images/w3schools_green.jpg',
  des: 'This was my first group app! It was really fun to make and messaround with API databases.',
};
const pro2 = {
  title: 'Whaats Da Buzz',
  img: '',
  des: 'My first work with making a social media app. ',
};
const pro3 = {
  title: 'Meow',
  img: '',
  des: 'Need to get to it before I can write about it!',
};


export default function Projects() {
  return (
    <div>
      <h1>Here are my projects!</h1>
      <div className='BoxOfCards'>
      <ProjectCard title={pro1.title} des={pro1.des} img={pro1.img}></ProjectCard>
      <ProjectCard title={pro2.title} des={pro2.des} img={pro2.img}></ProjectCard>
      <ProjectCard title={pro3.title} des={pro3.des} img={pro3.img}></ProjectCard>
      </div>
    </div>
  );
}

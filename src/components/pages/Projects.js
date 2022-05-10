import React from 'react';
import ProjectCard from './ProjectCard';


const pro1 = {
  title: 'G.O.A.T Scale',
  link: "https://devjontaylor.github.io/wing-map/",
  img: './images/WingMapDesktop.png',
  des: 'This was my first group app! It was really fun to make and messaround with API databases.',
};
const pro2 = {
  title: 'Whaats Da Buzz',
  link: "https://github.com/K-Bugz/Whats-The-Buzz",
  img: './images/Whats-the-Buzzsite.png',
  des: 'My first work with making a social media app. Whaaats the buzz was also my first sequalized db',
};
const pro3 = {
  title: 'Football Coding Quiz',
  link: "https://k-bugz.github.io/Code-Quiz/",
  img: './images/BearsCodeQuiz.png',
  des: 'This was one of my first time using Jquery in a project. I had a lot of fun thinking about how to get this to work properly. I chose to make each question an array of objects!',
};
const pro4 = {
    title: 'Password Generator',
    link: "https://k-bugz.github.io/password-generator/",
    img: './images/pwordGen.png',
    des: 'This was one of my first time using Jquery in a project. I had a lot of fun thinking about how to get this to work properly. I chose to make each question an array of objects!',
  };
  const pro5 = {
    title: 'Weather App',
    link: "https://k-bugz.github.io/Weather-Dashboard/",
    img: './images/DesktopWeatherDash.png',
    des: 'This was one of my first time using an API and I had to use two. One for getting the city location in lat and long then use that to hit another API to get the weather. Lots of fun!',
  };
  const pro6 = {
    title: 'Bugusky Portfolio',
    link: "https://k-bugz.github.io/Bug-Portfolio/",
    img: './images/BuguskyPortfolio.png',
    des: 'This was one of my first time using an API and I had to use two. One for getting the city location in lat and long then use that to hit another API to get the weather. Lots of fun!',
  };
  const pro7 = {
    title: 'Budget Champ',
    link: "https://budgetchamp.herokuapp.com/",
    img: './images/BudgetChamp.png',
    des: 'This was my first project using Mongoose and I REALLY REALLY loved it. Handeling data with it seems more straight forward then the schemas of SQL and sequaliize.',
  };
  const pro8 = {
    title: 'Make Dat Notes!',
    link: "https://make-dat-notes.herokuapp.com/",
    img: './images/MakeDatNote.png',
    des: 'A simple note taking app to practice queryselecting from the DOM and using some simple CRUD methods with routing. ',
  };

export default function Projects() {
  return (
    <div>
      <h1>My projects!</h1>
      <div className='BoxOfCards'>
        <ProjectCard title={pro1.title} link={pro1.link} des={pro1.des} img={pro1.img}></ProjectCard>
        <ProjectCard title={pro2.title} link={pro2.link} des={pro2.des} img={pro2.img}></ProjectCard>
        <ProjectCard title={pro3.title} link={pro3.link} des={pro3.des} img={pro3.img}></ProjectCard>
        <ProjectCard title={pro4.title} link={pro4.link} des={pro4.des} img={pro4.img}></ProjectCard>
        <ProjectCard title={pro5.title} link={pro5.link} des={pro5.des} img={pro5.img}></ProjectCard>
        <ProjectCard title={pro6.title} link={pro6.link} des={pro6.des} img={pro6.img}></ProjectCard>
        <ProjectCard title={pro7.title} link={pro7.link} des={pro7.des} img={pro7.img}></ProjectCard>
        <ProjectCard title={pro8.title} link={pro8.link} des={pro8.des} img={pro8.img}></ProjectCard>
      </div>
    </div>
  );
}
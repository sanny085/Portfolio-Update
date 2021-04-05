import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import VisibilityIcon from '@material-ui/icons/Visibility';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AirplayIcon from '@material-ui/icons/Airplay';
import CodeIcon from '@material-ui/icons/Code';

import residence1 from '../assets/images/residence1.JPG';
import residence2 from '../assets/images/residence2.JPG'; 
import github1 from '../assets/images/github1.svg';
import gym1 from '../assets/images/gym1.JPG'
import gym2 from '../assets/images/gym2.JPG' 
import janta1  from '../assets/images/janta1.JPG';
import janta2  from '../assets/images/janta2.JPG';
import googleKeep1 from '../assets/images/googleKeep1.JPG';
import googleKeep2 from '../assets/images/googleKeep2.JPG';
import amazonClone1 from '../assets/images/amazonClone1.JPG';
import amazonClone2 from '../assets/images/amazonClone2.JPG';
import KINGA from '../assets/images/KINGA.JPG';
import KINGB from '../assets/images/KINGB.JPG';
import Aierst from '../assets/images/Aierst.JPG';
import Aierst1 from '../assets/images/Aierst1.JPG';
import FoodR from '../assets/images/FoodR.JPG';
import FoodR1 from '../assets/images/FoodR1.JPG';

const ResumeData = {
    name:"Sanny Kumar",
    title:"Front-end Developer",
    birthday:"25th Dec 1999",
    address:"Bhramarpur, Bihpur, Bhagalpur",
    Job:'Fresher',
    phone:'70XXXXXXX7',
    Email:{
      url: 'sannyku@gmail.com',
      title: 'Email',
      subtitle: 'sanny@gmail.com',
    },
    socials:{
      Facebook:{
          url: 'https://www.facebook.com/profile.php?id=',
          title: 'MyFacebook',
          icon:<FacebookIcon/>,
      },
      Github:{
        url: 'https://github.com/sanny085',
        title: 'MyGithub',
        icon:<GitHubIcon/>,
      },
      LinkedIn:{
        url: 'https://www.linkedin.com/in/sanny-kumar-9683ba17b/',
        title: 'MyLinkedIn',
        icon:<LinkedInIcon/>,
      }
  },
 
about: "I am Sanny Kumar persuing my B-tech from Computer Science & Engineering Department at Dr. B.C. Roy Engineering College, Durgapur. I always Eager to learn and open to new challenges and also work on it. I am very passionate about Front-end Development to work on it. But, also familiar with Back-end development. I am learning as well as working on this Skillset from last 3 and a half years. That's why this is fit for me. \n\nRecently, I have done project on amazon-clone which was made using React JS and it's most popular Framework (MATERIAL-UI). This project imitates the fully E-Commerce Functionality. MATERIAL-UI provides more features and huge components and also integrate React Dynamic Currency. It would be change depending on user need. To sign a user into this app uses Firebase Authentication to allow users to sign in to my app using one or more sign-in methods, including email address and password sign-in.",


  experiences: [
    {
      title: "Web Developer Internship - AICT Pvt. Ltd.",
      description:
        "Involved in Development and Integration project based on AICT PVT. LTD. Worked closely with other engineers developers and managers.",
      date: "Oct 2019 - Apr 2020",
    },
    {
      title: "Responsive Web Designer - MySchoolInfo",
      description:
        "Worked here for responsive web designing. Maintained project and shared new idea with company.",
      date: "Jul 2019 - Oct 2019",
    },
  ],

  education: [
    {
      title: "Dr. B.C. Roy Engineering College,Durgapur",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2017 - 2021",
    },
    {
      title: "S.D College, Gauripur, Bhagalpur",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2014 - 2017",
    },
    {
      title: "High School Jairampur",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2013 - 2014",
    },
  ],
  services: [
    {
      title: "Front-end Development",
      description: "I develop websites, keeping them unique, functional and modern. Considering the latest technologies like HTML5, CSS3, JAVASCRIPT, React.js and more.",
      icon: <AirplayIcon />,
    },
    {
      title: "Responsive Design",
      description: "A website must be properly viewed on a wide variety of screens. I make sure that your website is always optimally usable on any device, any operating system and any web browser.",
      icon: <PhoneIphoneIcon />,
    },
    {
      title: "Web Development",
      description: "It is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
      icon: <CodeIcon />,
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["PHP", "JAVA"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
  ],
  projects: [
    {
      tag:'Animation',
      image:[
        residence2,
        residence1,
       ],
      title:'The Residence',
      caption:'Fresh UI Design From Scratch',
      description:'The Residence hotel Website is basically gives a look and feel of an apartment building offering, a dining room, and room meal service. Residential hotels range from the luxurious to the moderately priced. Design overhere New Design from Scratch and also Some Animation',
      links:[
        { 
          link:'https://indianidol.000webhostapp.com/Finatics%20private%20limited/Finatics%20Technology%20Private/about.html',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/The-Residence-Hotel',
          icon:<GitHubIcon/>
        },
      ],  
    },
     {
      tag:'React',
      image:[
        github1,
      ],
      title:'Project Library',
      caption:'A Short Description about project',
      description:'Git is the standard tool for source control. GitHub facilitates social coding by providing a web interface to the Git code repository and management tools for collaboration.And also work together on projects from anywhere. ',
      links:[
        { 
          link:'https://github.com/sanny085',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085',
          icon:<GitHubIcon/>
        },
      ],  
    },
    {
      tag:'Web Design',
      image:[
        janta1,
        janta2,
       ],
        title:'Janta Seva Kendra',
      caption:'The project has been Initiated with the help of Final Year Student Of BCREC 2K21.',
      description:'Janta Seva Kendra Is Developed As An Aggregated Service Delivery Platform With Technology As Its Backbone. We Function With A Unique Concept Of ‘A Customer Service Mall’ Where In Citizens’ Convenience Is Placed At The Core. Janta Seva Kendra Is A Platform Which Provides You Various Services & Products Under One Single Roof Through Physical Centers, Doorstep Service Or Cloud Based Solution.',
      links:[
        { 
          link:'https://sanny085.github.io/Janta-Seva-Kendra/index.html',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/Janta-Seva-Kendra',
          icon:<GitHubIcon/>
        },
      ],  
    },
    {
      tag:'Web Design',
      image:[
        Aierst,
        Aierst1,
      ],
      title:'AIERST',
      caption:'School Project',
      description:'This is a Complete sample (UI) how projects work at School Management System. In this Project, I am creating a basic Frontend part using HTML, CSS, Bootstrap, JavaScript.',
      links:[
        { 
          link:'https://indianidol.000webhostapp.com/AICT/home.html',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/AIERT-SCHOOL',
          icon:<GitHubIcon/>
        },
      ],  
    },
    {
      tag:'Web Design',
      image:[
        KINGA,
        KINGB,
      ],
      title:'KING AVIATION',
      caption:'KING AVIATION Consultancy services to support aircraft maintenanc',
      description:'King Aviation AIRPARTS & SERVICES PVT. LTD. offers you Aviation Consultancy services to support aircraft maintenance. Our reliable & rich connections ensure that our clients receive the best value. We strive in providing assistance to our clients in all the aviation linked matters.',
      links:[
        { 
          link:'https://indianidol.000webhostapp.com/KING%20AVIATION%20AIR%20PARTS/home.html',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/King-Aviation-Airparts',
          icon:<GitHubIcon/>
        },
      ],  
    },
    {
      tag:'Web Design',
      image:[
        googleKeep1,
        googleKeep2,
      ],
      title:'Google Keep Clone',
      caption:'A clone of Google Keep with some changing features.',
      description:'The Clone of Google Keep written in Simple JavaScript with Bootstrap(CSS Framework), and had implemented some basics to look like Google Keep, with complex features like storing and fetching data from local storage.',
      links:[
        { 
          link:'https://indianidol.000webhostapp.com/Google%20Keep%20Clone/google%20keep%20clone.html',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/Google-Keep-Clone',
          icon:<GitHubIcon/>
        },
      ],  
    },
    {
      tag:'Web Design',
      image:[
        FoodR,
        FoodR1,
      ],
      title:'Food Restaurant',
      caption:'Food aplication connecting Restaurants in an area',
      description:'An online portal for connecting Restaurants in an area. With this system we aim to avail food at doorstep with cash on delivery option.',
      links:[
        { 
          link:'https://sanny085.github.io/Food-Restaurant',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/Food-Restaurant',
          icon:<GitHubIcon/>
        },
      ],  
    },
     {
      tag:'React',
      image:[
        amazonClone1,
        amazonClone2,
      ],
      title:'Amazon Clone',
      caption:'A functional amazon clone made with React and MATERIAL-UI',
      description:"This project is made only for educational purposes, and is in no way associated with Amazon. It only give look and feel.NOT the real Amazon Prime Video. It's just a clone built using ReactJS & Google Firebase.",
      links:[
        { 
          link:'https://github.com/sanny085/amazon-clone',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/amazon-clone',
          icon:<GitHubIcon/>
        },
      ],  
    },
    {
      tag:'( Bootstrap, PHP )',
      image:[
        gym1,
        gym2,
      ],
      title:'TheEnergyHub',
      caption:'Bodybuilding is the use of progressive resistance exercise.',
      description:'This project was made using most popular (CSS) Framework, which is Bootstrap. I tests on 3-4 different-different devices. Bootstrap makes products user-friendly and more attractive. It is fully responsive. This project imitates the working of a Gym and has all its related function. For User registration, I used PHP as a back-end programming language to fetch the data and store them. Database is used to store data so that data is kept secure and unharmed. The database is kept in an online server so that this website is not restricted to be used only on local machines or devices .',
      links:[
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:<VisibilityIcon/>
        },
        { 
          link:'https://github.com/sanny085/TheEnergyHub',
          icon:<GitHubIcon/>
        },
      ],  
    },
  
  
  
  ],
}

export default ResumeData;

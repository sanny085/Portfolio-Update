import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  AssignmentOutlined,
  WebOutlined
} from "@material-ui/icons";
import VisibilityIcon from '@material-ui/icons/Visibility';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AirplayIcon from '@material-ui/icons/Airplay';
import CodeIcon from '@material-ui/icons/Code';

import residence1 from '../assets/images/residence1.JPG';
import residence2 from '../assets/images/residence2.JPG'; 
import github1 from '../assets/images/github1.svg';
import gym1 from '../assets/images/gym1.JPG'
import gym2 from '../assets/images/gym2.JPG' 

const ResumeData = {
    name:"Sanny Kumar",
    title:"Front-end Developer",
    birthday:"25th Dec 1999",
    address:"Bhramarpur, Bihpur, Bhagalpur",
    Job:'Fresher',
    phone:'808 467 6664',
    Email:{
      url: 'sannykumar085@gmail.com',
      title: 'Email',
      subtitle: 'sanny@gmail.com',
    },
    socials:{
      Facebook:{
          url: 'https://www.facebook.com/profile.php?id=100034132069006',
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
      tag:'Web Design',
      image:[
        'https://explore.easyprojects.net/wp-content/uploads/2016/07/Project-portfolio-management-934x640.jpg',
        'https://explore.easyprojects.net/wp-content/uploads/2016/07/Project-portfolio-management-934x640.jpg',
      ],
        title:'Bootstrap Project 1',
      caption:'A Short Description about project ',
      description:'This is my all project which shows',
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
      tag:'Web Design',
      image:[
        'data:image/jpeg;base64,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',
        'https://explore.easyprojects.net/wp-content/uploads/2016/07/Project-portfolio-management-934x640.jpg',
      ],
      title:'Bootstrap Project 1',
      caption:'A Short Description about project ',
      description:'This is my all project which shows',
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
        'https://www.blog.duomly.com/wp-content/uploads/2020/06/react-js-projects-for-beginners_hud75f6dd1ee6f4b8d225f54bd20a0cfe4_22949_1200x0_resize_box_2.png',
        'https://explore.easyprojects.net/wp-content/uploads/2016/07/Project-portfolio-management-934x640.jpg',
      ],
      title:'React Project 2',
      caption:'A Short Description about project ',
      description:'This is my all project which shows',
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
      tag:'PHP',
      image:[
        gym1,
        gym2,
      ],
      title:'TheEnergyHub',
      caption:'Bodybuilding is the use of progressive resistance exercise.',
      description:'Wonderful set up of gym with great reliability, Good selection of equipments, updated equipments and best services.',
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
  
  
  
  ],
}

export default ResumeData;

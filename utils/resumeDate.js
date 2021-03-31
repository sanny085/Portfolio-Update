import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  AssignmentOutlined,
  WebOutlined
} from "@material-ui/icons";

const ResumeData = {
    name:"Sanny Kumar",
    title:"Front-end Developer",
    
    birthday:"25th Dec 1999",
    address:"Bhramarpur, Bihpur, Bhagalpur",
    Job:'Fresher',
    phone:'1234567890',
    Email:{
      url: 'sannyk@gmail.com',
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
 
about: "I am Sanny Kumar persuing my B-tech from Computer Science & Engineering Department at Dr. B.C. Roy Engineering College, Durgapur. I always open to learn new technology and also work on it. I am very passionate about Front-end Development to work on it. But, also familiar with Back-end development. I am learning as well as working on this Skillset from last 3 and a half years. That's why this is fit for me. \n\nRecently, I have done project on amazon-clone which was made using React JS and it's most popular Framework (MATERIAL-UI). This project imitates the fully E-Commerce Functionality. MATERIAL-UI provides more features and huge components and also integrate React Dynamic Currency. It would be change depending on user need. To sign a user into this app uses Firebase Authentication to allow users to sign in to my app using one or more sign-in methods, including email address and password sign-in.",


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
      title: "Web Development",
      description: "I am learning on web design for 3 years.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description:
        "I am learning on web design for 3 years.",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Web Development",
      description: "I am learning on web design for 3 years.",
      icon: <WebOutlined />,
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
      image:'https://www.blog.duomly.com/wp-content/uploads/2020/06/react-js-projects-for-beginners_hud75f6dd1ee6f4b8d225f54bd20a0cfe4_22949_800x0_resize_box_2.png',
      title:'React Project 1',
      description:'This is my all project which shows',
      links:[
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<FacebookIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<LinkedInIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<GitHubIcon/>'
        },
      ],  
    },
    {
      tag:'Web Design',
      image:'https://explore.easyprojects.net/wp-content/uploads/2016/07/Project-portfolio-management-934x640.jpg',
      title:'Bootstrap Project 1',
      description:'This is my all project which shows',
      links:[
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<FacebookIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<LinkedInIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<GitHubIcon/>'
        },
      ],  
    },
    {
      tag:'Web Design',
      image:'https://explore.easyprojects.net/wp-content/uploads/2016/07/Project-portfolio-management-934x640.jpg',
      title:'Bootstrap Project 1',
      description:'This is my all project which shows',
      links:[
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<FacebookIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<LinkedInIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<GitHubIcon/>'
        },
      ],  
    },
    {
      tag:'React',
      image:'https://www.blog.duomly.com/wp-content/uploads/2020/06/react-js-projects-for-beginners_hud75f6dd1ee6f4b8d225f54bd20a0cfe4_22949_800x0_resize_box_2.png',
      title:'PHP Project 1',
      description:'This is my all project which shows',
      links:[
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<FacebookIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<LinkedInIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<GitHubIcon/>'
        },
      ],  
    },
    {
      tag:'PHP',
      image:'https://www.blog.duomly.com/wp-content/uploads/2020/06/react-js-projects-for-beginners_hud75f6dd1ee6f4b8d225f54bd20a0cfe4_22949_800x0_resize_box_2.png',
      title:'React Project 2',
      description:'This is my all project which shows',
      links:[
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<FacebookIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<LinkedInIcon/>'
        },
        { 
          link:'https://theenergyhub.000webhostapp.com/home.php',
          icon:'<GitHubIcon/>'
        },
      ],  
    },
  
  
  
  ],
}

export default ResumeData;

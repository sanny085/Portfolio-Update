import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


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

}

export default ResumeData;

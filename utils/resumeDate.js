import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const ResumeData = {
    name:"SANNY KUMAR",
    title:"Front-end Developer",
    
    birthday:"25th December 1999",
    email:"sannykumar085@gmail.com",
    address:"Bhramarpur, Bihpur, Bhagalpur",
    Job:'Fresher',
    phone:'808 467 6664',
     
    socials:{

      facebook:{
          url: 'https://www.facebook.com/profile.php?id=100034132069006',
          title: 'MyFacebook',
          icon:<FacebookIcon/>,
      },
      linkedIn:{
        url: 'www.linkedin.com/in/sanny-kumar-9683ba17b',
        title: 'MyLinkedIn',
        icon:<LinkedInIcon/>,
      },
      github:{
        url: 'https://github.com/sanny085',
        title: 'MyGithub',
        icon:<GitHubIcon/>,
    }
  },



}

export default ResumeData;
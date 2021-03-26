import React from 'react';

import { Typography } from '@material-ui/core';
import profileImage from '../../assets/images/profileImage.jpg';
import CustomTimeLine, {CustomTimeLineSeparator} from '../Timeline/CustomTimeLine.jsx'
import ResumeData from '../../utils/resumeDate';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

 

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';


import './Profile.css';

const CustomTimeLineItem = ({title, text, link}) => {
    return(
      <TimelineItem>
        <CustomTimeLineSeparator/>
         <TimelineContent>
         
         {link ? (<Typography><span>{title}:</span><a href={link} target="_blank">{text}</a></Typography>) : 
         (
           <Typography><span>{title}:</span>{text}</Typography>
         )}

         </TimelineContent>
      </TimelineItem>
    )
}


function Profile() {
    return (
      <div className="profile container_shadow">
          <div className="profile_name">
              <Typography className="name">{ResumeData.name}</Typography>
              <Typography className="title">{ResumeData.title}</Typography>
          </div>
           
           <figure className="profile_image">
               <img src={profileImage} alt="profile_pic"/>
           </figure>
           
           <div className="profile_information">
             
              <CustomTimeLine icon={<PersonOutlineIcon/>}> 
                 <CustomTimeLineItem title="Name" text={ResumeData.name}/>
                 <CustomTimeLineItem title="Title" text={ResumeData.title}/>
                 <CustomTimeLineItem title="Email" text={ResumeData.email}/>
                 <CustomTimeLineItem title="Name" text={ResumeData.name}/>
          
              </CustomTimeLine>

              <br/>
              <button>Download CV</button>
           </div>
      </div>
    );
}
export default Profile;
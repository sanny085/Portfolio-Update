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
      <TimelineItem className="time_line_Item">
       <CustomTimeLineSeparator className="time_line1"/>
         <TimelineContent className="timeline_content">
         {link ? (<Typography className="timelineItem_text"><span>{title}:</span><a className="text_content" target="_blank" href={link} target="_blank">{text}</a></Typography>) : 
          (
           <Typography className="timelineItem_text"><span>{title}:</span>{text}</Typography>
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
                 <CustomTimeLineItem  title="Name" text={ResumeData.name}/>
                 <CustomTimeLineItem title="Title" text={ResumeData.title}/>
                 <CustomTimeLineItem title="Email" text={ResumeData.email}/>
             
                {Object.keys(ResumeData.socials).map((key) => (
                  <CustomTimeLineItem  title={key} text={ResumeData.socials[key].title} link={ResumeData.socials[key].url}/>
                ))}
            </CustomTimeLine>
            <br/>

              <button>Download CV</button>
           </div>
      </div>
    );
}
export default Profile;

import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper, Typography, Icon} from "@material-ui/core";
import { SchoolRounded, WorkRounded} from "@material-ui/icons";
import ResumeData from "../../utils/resumeDate";

import "./Resume.css";
import { Grid } from "@material-ui/core";
 

const Resume = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/*About me*/}
        <Grid container className="section p_30 pb_45">
          <Grid item className="section_title top_30">
            <span></span>
            <h6 className="section_title_text">About Me</h6>
          </Grid>
          <Grid container className="top_30">
            <Grid item>
              <Typography variant="body2" className="aboutme_text">
                {ResumeData.about}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*Experiences + Education*/}
        <Grid container className="section pb_45">
          <Grid item className="section_title top_30">
            <span></span>
            <h6  className="section_title_text">Resume</h6>
          </Grid>

          <Grid container className="top_30">
            {/*Experiences*/}
            <Grid item md={6} className="experience pb_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <WorkRounded />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Work Experience
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              { ResumeData.experiences.map((exp, i) => (
                  <TimelineItem key={i}>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {exp.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                )) }
              </Timeline>
            </Grid>
            {/*Experiences*/}
            <Grid item md={6} className="experience pb_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <SchoolRounded />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Education
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {ResumeData.education.map((edu,j) => (
                  <TimelineItem key={j}>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {edu.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {edu.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Grid>

        {/*Services*/}
        <Grid container className="section pb_45">
          <Grid item className="section_title mb_45">
            <span></span>
            <h6 className="section_title_text">My Services</h6>
          </Grid>
          <Grid container spacing={3} justify="space-around">
            {ResumeData.services.map((val,k) => { return(
              <Grid item xs={12} sm={6} md={3} key={k}>
                <Paper elevation={0} className="service">
                  <div className="service_upper"><Icon className="service_icon">{val.icon}</Icon></div>
                  <Typography variant="h6" className="service_title">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {val.description}
                  </Typography>
                </Paper>
              </Grid>
            )}) 
            }
          </Grid>
        </Grid>

        {/*Skills*/}
        <Grid container className="section graybg p_50 pb_45">
          <Grid item className="section_title mb_45">
             <span></span>
            <h6 className="section_title_text">My Skills</h6>
          </Grid>
          <Grid container spacing={3} justify={"space-between"}>
            {ResumeData.skills.map((val1,l) => { return (
              <Grid item xs={12} sm={6} md={3} key={l}>
                <Paper elevation={0} className="skills">
                  <Typography variant="h6" className="skills_title">
                    {val1.title}
                  </Typography>
                  {val1.description.map((el, x) => (
                    <Typography variant="body2" className="skills_description" key={x}>
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"/>
                      {el}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            )} ) }
          </Grid>
        </Grid>
      {/*End Skills*/}
         

      </Grid>
    </Grid>
  );
};
export default Resume;

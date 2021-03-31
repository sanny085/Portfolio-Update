import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper, Typography, Icon, TextField, Button } from "@material-ui/core";
import { SchoolRounded, WorkRounded, Facebook, Twitter, LinkedIn, GitHub  } from "@material-ui/icons";
import ResumeData from "../../utils/resumeDate";

import "./Resume.css";
import { Grid } from "@material-ui/core";
import CustomButton from "../../components/Button/Button";

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
                {ResumeData.experiences.map((exp) => (
                  <TimelineItem>
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
                ))}
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
                {ResumeData.education.map((edu) => (
                  <TimelineItem>
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
            {ResumeData.services.map((val) => { return(
              <Grid item xs={12} sm={6} md={3}>
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
            {ResumeData.skills.map((val) => { return (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skills">
                  <Typography variant="h6" className="skills_title">
                    {val.title}
                  </Typography>
                  {val.description.map((el) => (
                    <Typography variant="body2" className="skills_description">
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

        {/*Contact*/}
        <Grid container className="section p_50 pb_50" spacing="10">
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title top_30">
                <span></span>
                <h6 className="section_title_text">Contact Form</h6>
              </Grid>

              <Grid item className="top_30">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label="E-mail" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" multiline rows={4} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text={"Submit"}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Grid container>
              <Grid item className="section_title top_30">
                <span></span>
                <h6 className="section_title_text">Contact Information</h6>
              </Grid>
              <Grid item xs={12} className="top_30">
                <Grid container>
                  <Grid item>
                    <Typography className="contactInfo_item">
                      <span>Address:</span> {ResumeData.address}
                    </Typography>
                    <Typography className="contactInfo_item">
                      <span>Phone:</span> 
                       <a className="mobResume" href={`tel: ${ResumeData.phone}`}>{" "}{ResumeData.phone}</a>
                    </Typography>
                        <a href={`mailto: ${ResumeData.Email.url}`} className="emailResume" >
                        <Typography className="contactInfo_item">
                            <span>Email:</span> {ResumeData.Email.subtitle}
                        </Typography>
                    </a>
                    <Grid container className="contactInfo_socialsContainer">

                      {Object.keys(ResumeData.socials).map(key => (
                          <Grid item className="contactInfo_social">
                            <a href={ResumeData.socials[key].url} target="_blank">{ResumeData.socials[key].icon}</a>
                          </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;

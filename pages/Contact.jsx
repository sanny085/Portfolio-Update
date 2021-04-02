import React from 'react'
import './Contact.css'

import ResumeData from "../../utils/resumeDate";
import {Typography, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CustomButton from "../../components/Button/Button";

const Contact = () => {
    return (
    <>
 <Grid container>
    <Grid item xs={12}>
       {/*Contact*/}
       <Grid container className="section p_30 pb_45" spacing="10">
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
        {/*End Contact*/}    

        </Grid>
     </Grid> 
    </>
    )
}

export default Contact;

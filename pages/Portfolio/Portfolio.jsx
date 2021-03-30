import React, { useState } from 'react';
import './Portfolio.css';

import { Button,
    Card,
    CardActionArea,
    Grid,
    Grow,
    Tabs,
    Typography
} from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import ResumeData from "../../utils/resumeDate";
 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 


function Portfolio() {
    const [tabvalue, setTabvalue] = useState("All");
    
    const [projectDialog, setProjectDialog] = useState(false);


    return (
     <Grid container className="section p_30 pb_45">
        
{/*Portfolio*/}
<Grid item className="section_title top_30">
    <span></span>
    <h6 className="section_title_text">Portfolio</h6>
</Grid>
{/*End Portfolio*/}

{/*Tabs*/}
    <Grid item xs={12}>
    <Tabs value={tabvalue} indicatorColor="white" className="customTabs" 
        onChange={(event, newValue) =>{setTabvalue(newValue) }}>

        <Tab label="All" value="All" 
            className={ tabvalue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />   
        {/*Set method remove Duplicate value from listing*/}
        { [...new Set(ResumeData.projects.map((items) => items.tag ))].map( (n)=>  (
            <Tab label={n}  value={n} className={tabvalue == n ? 'customTabs_item active' : 'customTabs_item'} />
        
        ))}
    </Tabs>
    </Grid>
{/*End Tabs*/}


{/*Project*/}
 <Grid item xs={12}>
    <Grid container spacing={1}>
      {ResumeData.projects.map( (pro) => (
        <> 
        {tabvalue == "All" || tabvalue == pro.tag ? (
            <Grid item key={pro}>
           <Grow in timeout={1000} key={pro}>
             <Card className="CustomCard" onClick={ ()=> setProjectDialog(pro) }>
                <CardActionArea>
                    <CardMedia
                    key={pro}
                    className='CustomCard_image'
                    image={pro.image}
                    title={pro.title}
                    />
                 <CardContent>
                    <Typography classname="CustomCard_title">
                        {pro.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="CustomCard_description">
                       {pro.caption}
                    </Typography>
                 </CardContent>
                </CardActionArea>
             </Card>
            </Grow>
         </Grid>

        ) : null}
        
        </>
      ))}

    </Grid>
 </Grid>
{/*End Project*/}
<Dialog open={projectDialog} onClose={ ()=> setProjectDialog(false)}>
        <DialogTitle onClose={ ()=> setProjectDialog(false)}>
         {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt={projectDialog.title} className="projectDialog_image" />

        <DialogContent>
          <Typography className="projectDialog_description"> {projectDialog.description}</Typography>
        </DialogContent>

        <DialogActions className="projectDialog_actions">
        {projectDialog?.links?.map((link)=>{
            <a href={link.link} className="href" target="_blank" className="projectDialog_icon">
              {link.icon}
            </a>
        })}
        </DialogActions>
    </Dialog>
     </Grid>
    )
}
export default Portfolio;

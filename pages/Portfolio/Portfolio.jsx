import React, { useState } from 'react';
import './Portfolio.css';

import { Grid, Tabs } from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import ResumeData from "../../utils/resumeDate";




function Portfolio() {
    const [taBvalue, setTabvalue] = useState("All");

    return (
     <Grid container className="section p_30 pb_45">
        {/*Title*/}
        <Grid item className="section_title top_30">
          <span></span>
          <h6 className="section_title_text">Portfolio</h6>
        </Grid>
         
        {/*Title*/}
        <Grid item xs={12}>
            <Tabs value={taBvalue} indicatorColor="white" className="custom_tabs" 
             onChange={(event, newValue) =>{setTabvalue(newValue) }}>

                <Tab label="All" value="All" 
                    className={ taBvalue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />   
                {/*Set method remove Duplicate value from listing*/}
                { [...new Set(ResumeData.projects.map((items) => items.tag ))].map( (n)=>  (
                    <Tab label={n} value={n} className={taBvalue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />
                
                ))}
            </Tabs>
        </Grid>

        {/*Project*/}
        <Grid item xs={12}>

        </Grid>


     </Grid>
    )
}
export default Portfolio;

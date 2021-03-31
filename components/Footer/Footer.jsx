import React from 'react'

import Typography from '@material-ui/core/Typography';
import ResumeData from '../../utils/resumeDate';

import './Footer.css';

function Footer() {
 return (
        <div className="footer">
           <div className="footer_left">
             <Typography className="footer_name"  >
                    {ResumeData.name}
             </Typography>
           </div>
           
           <div className="footer_right">
            <Typography className="footer_copyright">
               Designed And Developed By &#9825;{" "}
               <a href="./" >
               {ResumeData.name}
               </a>
               <br/>
               &#169;{" "+(new Date().getFullYear())} Clone Idea From {" "}
               <a href="https://themeforest.net/item/mat-html-vcard-template/21062060" target="_blank">
                   Tavonline
               </a>.
             </Typography>
           </div>

        </div>
    )
}
export default Footer;

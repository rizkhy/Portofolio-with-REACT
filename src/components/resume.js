import React, { Component } from 'react';
import { Grid, Cell} from  'react-mdl';
import Avatar from '../images/avatar.png';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={Avatar} alt="Avatar" style={{ height: '200px'}} />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Rizky Kurniawan</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Kuwon, Sidomulyo, Bambanglipuro, Bantul</p>
                        <h5>Phone</h5>
                        <p>+6289626688757</p>
                        <h5>E-Mail</h5>
                        <p>rizky1842@gmail.com</p>
                        <h5>Web</h5>
                        <p>rizkhy.github.io</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education startYear={2011} endYear={2014} schoolName="Senior High School" schoolDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>

                        <Education startYear={2014} endYear={2018} schoolName="University" schoolDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience startYear={2014} endYear={2018} jobName="Drawmint" jobDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skill</h2>
                        <Skill skill="JavaScript" progress={80} buffer={80} />
                        <Skill skill="PHP" progress={90} buffer={90} />
                        <Skill skill="HTML" progress={90} buffer={90} />
                    </Cell>
                </Grid>
            </div>
        )        
    }
}

export default Resume;
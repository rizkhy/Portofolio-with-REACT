import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Avatar from '../images/avatar.png';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rizky Kurniawan</h2>
                        <img src={Avatar} alt="Avatar" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Halloo, bla bla bla bla</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                            +6289626688757
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                            +6289626688757
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                            rizky1842@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                            rizkhy_k
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )        
    }
}

export default Contact;
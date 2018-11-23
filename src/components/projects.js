import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab : 0
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://d1dkupr86d302v.cloudfront.net/community/assets/social-media-icons/icon-tag-react-0890ee78bd7e182d153900e4af5b1f33561afdac384c6191eab4e90528b0781b.png) center / cover'}}>
                        React Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://d1dkupr86d302v.cloudfront.net/community/assets/social-media-icons/icon-tag-react-0890ee78bd7e182d153900e4af5b1f33561afdac384c6191eab4e90528b0781b.png) center / cover'}}>
                        React Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://d1dkupr86d302v.cloudfront.net/community/assets/social-media-icons/icon-tag-react-0890ee78bd7e182d153900e4af5b1f33561afdac384c6191eab4e90528b0781b.png) center / cover'}}>
                        React Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    
                </div>
            )   
        }else if(this.state.activeTab === 1){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://www.abeautifulsite.net/uploads/2014/08/php-logo.png) center / cover'}}>
                        PHP Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://www.abeautifulsite.net/uploads/2014/08/php-logo.png) center / cover'}}>
                        PHP Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://www.abeautifulsite.net/uploads/2014/08/php-logo.png) center / cover'}}>
                        PHP Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    
                </div>
            )
        }else{
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://www.sitepen.com/blog/wp-content/uploads/2017/09/blog.jpg) center / cover'}}>
                        Angular Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://www.sitepen.com/blog/wp-content/uploads/2017/09/blog.jpg) center / cover'}}>
                        Angular Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '330px', margin: '30px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                                            background: 'url(https://www.sitepen.com/blog/wp-content/uploads/2017/09/blog.jpg) center / cover'}}>
                        Angular Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    
                </div>
            )
        }
    }
    

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab : tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Angular</Tab>
                </Tabs>

                <section className="project-grid">
                    <Grid>
                        <Cell coll={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )        
    }
}

export default Project;
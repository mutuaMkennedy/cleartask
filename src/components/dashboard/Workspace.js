import React from 'react';
import Sidebar from './Sidebar';
import Topnav from './Topnav';
import "./Styles.css";
import "./Workspace.css";
import {Container, Grid, Card, CardContent} from '@mui/material';
import { Icon } from '@iconify/react';
import Trend from 'react-trend';


const card = (
    <React.Fragment>
      <CardContent>
        <div className='top'>
            <div className='left'>
                <div className='iconWrp'>
                    <Icon className="icon" icon="mdi-light:star"/>
                </div>
                <h3>Tasks Completed</h3>
            </div>
            <span>08</span>
        </div>
        <div className="dvdr"></div>
        <div className='middle'>
            <div className='left'>
                <Trend
                data={[0, 10, 75, 6, 6, 101]}
                gradient={['#0FF', '#F0F', '#FF0']} 
                smooth
                height={200}
                radius={20} 
                strokeWidth={6}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                />
            </div>
            <div className='right'>
                <h5><span>10+</span>more</h5>
                <p>from last week</p>
            </div>
        </div>
      </CardContent>
    </React.Fragment>
  );

  
class Workspace extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('workspace')
    }

    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className='dashContentContainer'>
                    <div>
                        <Topnav/>
                    </div>
                    <div className="dashContent">
                        <p>My workspace</p>
                        <Container className="dashCContainer">
                            <Grid container spacing={3} className="dashCgrid">
                                <Grid item xs={3} className="dashCGridItem">
                                    <Card className="dashCCard">{card}</Card>
                                </Grid>
                                <Grid item xs={3} className="dashCGridItem">
                                    <Card className="dashCCard">{card}</Card>
                                </Grid>
                                <Grid item xs={3} className="dashCGridItem">
                                    <Card className="dashCCard">{card}</Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Workspace;
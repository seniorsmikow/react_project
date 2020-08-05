import React from 'react';
import Loader from '../../Loader/Loader';
import Status from './Status/Status';
import InstagramIcon from '@material-ui/icons/Instagram';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import icon from '../../../img/img_568657.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      margin: '0 auto',
      paddingTop: '50px',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    media: {
        height: 0,
        paddingTop: '70%', 
    },
    paper: {
        width: 275,
        marginTop: '20px',
        '&:hover': {
            transform: 'scale(1.02)',
            backgroundColor: '#eceff1'
        }
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    element: {
        display: 'flex',
        justifyContent: 'left',
        marginLeft: '20px',
        maxWidth: '70%',
        marginBottom: '10px'
    },
    elementChild: {
        marginLeft: '20px',
    },
});



const Profile = (props) => {

    const classes = useStyles();

    if(!props.profile) {
        return <Loader />
    }

    return (
        <div className={classes.root}>
            Profile page
            <Divider />
            <Paper elevation={3} className={classes.paper}>
                <div className={classes.wrapperProfile}>
                    <CardMedia
                    className={classes.media}
                    image={props.profile.photos.large ? props.profile.photos.large : icon}
                    title="user icon"
                    alt="user icon"
                    />
                        
                    <Divider />
                    <div className={classes.element}>
                        <RecordVoiceOverIcon />
                        <div className={classes.elementChild}>
                            <Status status={props.status} deactivate={props.deactivate}/>
                        </div>
                    </div>
                    
                    <div className={classes.element}>
                        <LocalLibraryIcon />
                        <div className={classes.elementChild}>
                            {props.profile.fullName}
                        </div>
                    </div>
                    
                    <div className={classes.element}>
                        <TwitterIcon />
                        <div className={classes.elementChild}>
                            <a href={props.profile.contacts.twitter}>twitter</a>
                        </div>
                    </div>
                    <div className={classes.element}>
                        <InstagramIcon />
                        <div className={classes.elementChild}>
                            <a href={props.profile.contacts.instagram}>instagram</a>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
};

export default Profile;
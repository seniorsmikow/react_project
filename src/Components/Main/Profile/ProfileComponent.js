import React from 'react';
import {connect} from 'react-redux';
import {thunkCreatorGetProfile, getUStatus, updateUStatus} from '../../../Redux/Profile-reducer';
import Profile from './Profile';
import {withRedirect} from '../../../Hoc/withRedirect';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileComponent extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 8444;
        }
        this.props.thunkCreatorGetProfile(userId);
        this.props.getUStatus(userId);
    }

    render() {
        
        return <Profile {...this.props} profile={this.props.profile} deactivate={this.props.updateUStatus} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

let ProfileContainer = compose(
    withRouter,
    withRedirect,
    connect(mapStateToProps, {thunkCreatorGetProfile, getUStatus, updateUStatus})
    )
    (ProfileComponent);

// let a = withRouter(ProfileComponent);

// let b = withRedirect(a);


// let ProfileContainer = connect(mapStateToProps, {thunkCreatorGetProfile})(b);

export default ProfileContainer;

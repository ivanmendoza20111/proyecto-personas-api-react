import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
//import UserDetail from '../views/UserDetail';

class UserItem extends Component {

    state = {
        isRedirected: false
    }

    onClick= (e) => {
        this.setState({
            isRedirected: true
        })
    }

    render() {
        const {name,last_name,id,facebook} = this.props;

        if(this.state.isRedirected){
            return(
                <Redirect to={ "/detail/" + id } />
            );
        }

        return (
            <div className="card" onClick={this.onClick}>
                <div className="card-content">
                    <div className="UserItem-leftBox">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" className="UserItem-image" alt="profile"/>
                    </div>
                    <div className="UserItem-rightBox">
                        <h2 className="UserItem-name">{name + " "+ last_name}</h2>    
                        <h3 className="UserItem-facebook">{facebook}</h3>
                    </div>
                    
                </div>
            </div>
        );
    }
}

UserItem.propTypes = {
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    facebook: PropTypes.string
}

export default UserItem;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends Component {
    componentDidMount(){
     
        this.props.fetchUser(this.props.userId);
    }
    render(){
        // const user = this.props.users;
        const { user } = this.props;
        // return <div>{user}</div>
        if(!user){ 
            return null;
        } 
        return <div className="header">{user.name}</div>;
        
    } 
}


const mapStateToProps = (state, ownProps) =>{ 
    return { user: state.users.find(user => user.id === ownProps )};
}
export default connect(mapStateToProps,{fetchUser})(UserHeader);
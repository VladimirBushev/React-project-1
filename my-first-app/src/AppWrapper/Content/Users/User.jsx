import UserStyle from './User.module.css'
import { NavLink } from 'react-router-dom';
import React from 'react';
import imageCamera from '../../../images/camera.jpg'



class User extends React.Component {

    render() {
        return (
            <div className={UserStyle.wrapper}>
                <div className={UserStyle.div}>
                    <div className={UserStyle.img} >
                        <NavLink to={`/profile/${this.props.id}`}>
                            <img alt='' src={this.props.img ? this.props.img : imageCamera}></img>
                        </NavLink>
                    </div >
                    <div className={UserStyle.name}>{this.props.name}</div>
                    <div className={UserStyle.button}>
                        <button disabled={this.props.followingInProgress && this.props.isAuth ? this.props.followingInProgress.some(e => e === this.props.id) : true}
                            onClick={this.props.followChanger && this.props.followChanger.bind(null ,this.props.id, this.props.followed)}>
                            {this.props.followed ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>
                </div >
            </div>

        )
    }
}

export default User
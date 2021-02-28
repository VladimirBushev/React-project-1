import FriensStyle from './Friends.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    let friends = []
    let id = 0
    for (let friend of props.friends.friends) {
        id++
        friends.push(
            <NavLink key={id.toString()} to={`/profile/${friend.id}`} id={friend.id}>
                <div className={FriensStyle.div}>
                    <img alt='' src={friend.img}></img>
                    <div>{friend.name}</div>
                </div>
            </NavLink>
        )
    }
    return (
        <div className={FriensStyle.friends}>
            <span className={FriensStyle.friendsA}>Друзья</span>
            {friends}
        </div>
    )
}

export default Friends;
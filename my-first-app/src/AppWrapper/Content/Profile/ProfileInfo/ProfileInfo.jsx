import ProfileInfoStyle from './ProfileInfo.module.css'
import React from 'react';

const ProfileInfo = (props) => {
    return (
        <div className={`${ProfileInfoStyle.profileInfo} ${ProfileInfoStyle.div}`}>
            <div className={ProfileInfoStyle.name}>{props.profileInfo ? props.profileInfo.name : props.name}</div>
            <div>Дата рождения: {props.profileInfo ? props.profileInfo.date : 'Не указана'}</div>
            <div>Город: {props.profileInfo ? props.profileInfo.city : 'Не указан'}</div>
            <div></div>
        </div>
    )
}

export default ProfileInfo;
import ProfileInfoStyle from './ProfileInfo.module.css'
import React, { useState } from 'react';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    if (!props.isMyProfile) {
        if (editMode) setEditMode(false)
    }
    return (
        <div className={`${ProfileInfoStyle.profileInfo} ${ProfileInfoStyle.div}`}>
            <div className={ProfileInfoStyle.name}>{props.profileInfo ? props.profileInfo.name : props.profile.fullName}</div>
            {props.thisIsARealUser ?
                <div>
                    {editMode ?
                        <ProfileDataForm {...props} setEditMode={() => setEditMode(false)}/> 
                        :
                        <ProfileData {...props} setEditMode={() => setEditMode(true)}/>
                    }
                </div> 
                :
                <div>
                    <div className={ProfileInfoStyle.info}>Дата рождения: {props.profileInfo ? props.profileInfo.date : 'Не указана'}</div>
                    <div className={ProfileInfoStyle.info}>Город: {props.profileInfo ? props.profileInfo.city : 'Не указан'}</div>
                </div>}
        </div>
    )
}

export default ProfileInfo;
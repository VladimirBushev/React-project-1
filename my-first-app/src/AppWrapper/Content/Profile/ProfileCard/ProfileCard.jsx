import profileCardStyle from './ProfileCard.module.css'
import React from 'react';
import imageCamera from '../../../../images/camera.jpg'



const ProfileCard = (props) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.loadPhoto(e.target.files[0])       
        }
    }
    return (
        <div className={`${profileCardStyle.profileCard} ${profileCardStyle.div}`}>
            <div className={profileCardStyle.profileImg}>
                <img alt='' className={profileCardStyle.img} src={props.img ? props.img : imageCamera } />
            </div>
            {props.isAuth && props.isMyProfile &&
            <div>
                <input type='file' placeholder='s' onChange={onMainPhotoSelected} className={profileCardStyle.input}></input>
            </div>}
        </div>
    )
}

export default ProfileCard;
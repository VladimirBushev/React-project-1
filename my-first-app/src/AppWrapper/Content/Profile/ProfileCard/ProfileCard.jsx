import profileCardStyle from './ProfileCard.module.css'
import React from 'react';
import imageCamera from '../../../../images/camera.jpg'

const ProfileCard = (props) => {
    return (
        <div className={`${profileCardStyle.profileCard} ${profileCardStyle.div}`}>
            <div className={profileCardStyle.profileImg}>
                <img alt='' className={profileCardStyle.img} src={props.img ? props.img : imageCamera } />
            </div>
            {/* <div>
                <button className={profileCardStyle.button}>Подписаться</button>
            </div> */}
        </div>
    )
}

export default ProfileCard;
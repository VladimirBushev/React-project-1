import profileStyle from './Profile.module.css';
import ProfileCard from './ProfileCard/ProfileCard.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import Friends from './Friends/Friends.jsx'
import Subscriptions from './Subscriptions/Subscriptions.jsx'
import Photos from './Photos/Photos.jsx'
import Posts from './Posts/Posts';
import React from 'react';
import { Route } from 'react-router-dom';
// import ProfileStatus from './ProfileInfo/ProfileStatus'
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatusWithHooks';

const Profile = ({saveProfile, users, publishPost, profile, isAuth, status, changeStatus, updateStatus, isMyProfile, loadPhoto, profileUpdateError}) => {
    if (users.length > 0) {
        let Arrusers = users.map((user, id) => <Route key={id.toString()} path={`/profile/${user.id}`} render={() =>
            <div className={profileStyle.profile}>
                <ProfileCard img={user.profileCard.img} isMyProfile={isMyProfile} />
                <ProfileInfo thisIsARealUser={false} profileInfo={user.profileInfo} />
                <Friends friends={user.friends} />
                <Subscriptions subscriptions={user.subscriptions} />
                <Photos photos={user.photos} />
                <Posts publishPost={publishPost}
                    posts={user.posts.posts}
                    id={user.id}
                    isAuth={isAuth}/>
            </div>} />)
        return (
            <div>
                {Arrusers}
            </div>
        )
    }
    if (profile) {
        return (
            <div className={profileStyle.profileRealUser}>
                <ProfileCard img={profile.photos.large} loadPhoto={loadPhoto} isAuth={isAuth} isMyProfile={isMyProfile} />
                <ProfileStatusWithHooks isAuth={isAuth} status={status} changeStatus={changeStatus} updateStatus={updateStatus}/>
                <ProfileInfo profileUpdateError={profileUpdateError} saveProfile={saveProfile}profile={profile} thisIsARealUser={true} isMyProfile={isMyProfile}/>
            </div>
        )
    }
}

export default Profile;
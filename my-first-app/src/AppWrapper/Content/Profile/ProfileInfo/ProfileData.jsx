import ProfileInfoStyle from './ProfileInfo.module.css'

const ProfileData = (props) => {
    let contacts = []
    let index = 0
    if (props.profile) {
        for (let key in props.profile.contacts) {
            index++
            if (props.profile.contacts[key]) {
                contacts.push(<div className={ProfileInfoStyle.contacts} key={index}><a href={'https://' + props.profile.contacts[key]}>{key}</a>{ }</div>)
            }
        }
    }
    return (
        <div>
            {props.isMyProfile && <div><button onClick={props.setEditMode} className={ProfileInfoStyle.button}>редактировать данные</button></div>}

            {props.profile.lookingForAJob &&
                <div>
                    <div className={ProfileInfoStyle.infoLabel}>
                        Ищу работу
                    </div>
                </div>}
            {props.profile.lookingForAJobDescription &&
                <div className={ProfileInfoStyle.infoLabel}>
                    Навыки: {props.profile.lookingForAJobDescription}
                </div>
            }
            {props.profile.aboutMe &&
                <div className={ProfileInfoStyle.infoLabel}>
                    Обо мне: {props.profile.aboutMe}
                </div>}
            {contacts}
        </div>
    )
}

export default ProfileData
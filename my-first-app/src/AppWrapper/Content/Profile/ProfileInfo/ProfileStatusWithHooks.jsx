import ProfileInfoStyle from './ProfileInfo.module.css'
import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            { ((props.changeStatus !== undefined) || !props.isAuth) ?
                <div className={ProfileInfoStyle.statusDiv}>
                    <div>
                        <span className={ProfileInfoStyle.status} >{status || ''}</span>
                    </div>
                </div>
                 :
                <div className={ProfileInfoStyle.statusDiv}>
                    {editMode ?
                        <div>
                            <input className={ProfileInfoStyle.input} onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status} type="text" />
                        </div>
                        :
                        <div>
                            <span className={ProfileInfoStyle.status} onClick={activateEditMode}>{status || 'Введите ваш статус'}</span>
                        </div>
                    }
                </div>
                }
        </>
    )
}


export default ProfileStatusWithHooks
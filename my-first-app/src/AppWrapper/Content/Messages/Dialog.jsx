import DialogStyle from './Dialog.module.css'
import {NavLink} from 'react-router-dom';
import React from 'react';

const Dialog = (props) => {
    let changeFriendDialog = () => {
        props.changeDialog(props.dialog.to)
    }
    return (
        <NavLink onClick={changeFriendDialog} to={'/messages/' + props.dialog.to}>
            <div className={DialogStyle.div}>
                <img className={DialogStyle.img} src={props.dialog.img} alt=''/>
                <div className={DialogStyle.name}>{props.dialog.name}</div>
                <div className={DialogStyle.text}>{props.dialog.lastMes}</div>
                <div className={DialogStyle.time}>{props.dialog.lastMesTime}</div>
            </div>
        </NavLink >
    )
}

export default Dialog;
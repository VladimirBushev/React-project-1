import DialogsStyle from './Dialogs.module.css'
import Dialog from './Dialog.jsx'
import React from 'react';

const Dialogs = (props) => {
    let friendsDialogs = [];
    let oldFriendsDialogs = [];
    let id = 0;
    for (let friend in props.dialogs) {
        id++;
        if (props.dialogs[friend].last) {
            friendsDialogs[props.dialogs[friend].last] = <Dialog key={Math.random()} changeDialog={props.changeDialog} dialog={props.dialogs[friend]} />
        } else {
            oldFriendsDialogs.push(<Dialog key={id.toString()} dialog={props.dialogs[friend]} changeDialog={props.changeDialog} />)
        }
    }
    let showDialogs = [...friendsDialogs, ...oldFriendsDialogs]
    return (
        <div className={DialogsStyle.messages}>
            {showDialogs}
        </div>
    )
}


export default Dialogs;
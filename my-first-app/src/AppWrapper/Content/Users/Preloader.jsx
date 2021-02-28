import loader from '../../../images/loader.svg'
import UsersStyle from './Users.module.css'
import React from 'react';

const Preloader = (props) => {
    return (
        <div className={UsersStyle.loader}>
            {props.isFetching ? <img alt='' src={loader} /> : null}
        </div>
    )
}

export default Preloader
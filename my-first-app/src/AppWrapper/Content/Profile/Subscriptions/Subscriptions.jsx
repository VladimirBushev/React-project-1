import SubscriptionsStyle from './Subscriptions.module.css'
import React from 'react';

const Subscriptions = () => {
    return (
        <div className={`${SubscriptionsStyle.subscriptions} ${SubscriptionsStyle.div}`}><span>Подписки</span></div>
    )
}

export default Subscriptions;
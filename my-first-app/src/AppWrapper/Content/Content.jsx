import { Route } from 'react-router-dom';
import ContentStyle from './Content.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import React from 'react';
import UsersContainer from './Users/UsersContainer';
import UsersAPIContainer from './Users/UsersAPIContainer'
import ProfileContainer from './Profile/ProfileContainer';
import withSuspense from '../../hoc/withSuspense';

const Login = React.lazy(() => import('./Login/Login'));
const News = React.lazy(() => import('./News/News'));

const Content = () => {    
    return (
        <div className={ContentStyle.content}>
            <Route exact path='/' render={() => <ProfileContainer/>}/>
            <Route path='/profile/:userId' render={ () => <ProfileContainer/>}/>
            <Route exact path='/profile' render={ () => <ProfileContainer/>}/>
            <Route path='/news' render={withSuspense (News)} />
            <Route path='/messages' render={ () => <MessagesContainer />}/>
            <Route exact path='/users' render={ () => <UsersContainer />}/>
            <Route exact path='/usersapi' render={ () => <UsersAPIContainer />}/>
            <Route exact path='/login' render={withSuspense (Login)}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
        </div>
    )
}

export default Content;
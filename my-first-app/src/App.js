import styles from './App.module.css';
import HeaderContainer from './Header/HeaderContainer';
import AppWrapper from './AppWrapper/AppWrapper';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './AppWrapper/Content/Users/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store'
import { Provider } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (this.props.initialized) {
      return (
        <div className={styles.div}>
          <HeaderContainer />
          <AppWrapper />
        </div>
      )
    }
    return <Preloader isFetching={true} />
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const MainApp = (props) => {
  return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
}

export default MainApp

import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';
import UsersContainer from './Components/Users/UsersContainer'
import OnlineFriends from './Components/Friends/online/onlineFriends';
import LoginPage from './Components/Login/Login';
import Preloader from './Components/common/Preloader/Preloader'
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializApp} from './redux/app-reducer';
import store from './redux/redux-store.js';
import {withSuspense} from './hoc/withSuspense'


const DialogsContainer = React.lazy(() => import ('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./Components/Profile/ProfileContainer'))


class App extends React.Component {
	componentDidMount () {
		this.props.initializApp();
	}
	render () {
		if(!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className='app_wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className='app_wrapper_conent'>
					<Route path='/Profile/:userId?'
						   render={withSuspense(ProfileContainer)}/>
					<Route path='/dialogs'
						   render={withSuspense(DialogsContainer)}/>
					<Route path='/users'
						   render={() => <UsersContainer/>}/>
					<Route path='/login'
						   render={() => <LoginPage/>}/>
					<Route path='/Music' render={() => <Music/>}/>
					<Route path='/News' render={() => <News/>}/>
					<Route path='/Settings' render={() => <Settings/>}/>
					<Route path='/Friends' render={() => <Friends/>}/>
					<Route path='/Friends' render={() => <OnlineFriends/>}/>
				</div>
			</div>
	    )
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer =  compose(
	withRouter,
	connect(mapStateToProps, {initializApp}))(App);

const MainApp = (props) => {
	return <BrowserRouter basename={process.env.PUBLIC_URL} >
				<Provider store={store}>
					<AppContainer />
				</Provider>		
			</BrowserRouter>
}

export default MainApp;

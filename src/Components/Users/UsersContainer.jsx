
import React from 'react';
import Users from '../Users/Users';
import {connect} from 'react-redux';
import {follow, unfollow, toggleFollowingProgress, requestUsers,
	setCurrentPage} from '../../redux/users-reducer.js';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getUsers, getPageSize, getCurrentPage, getIsFetching,
		getTotalUsersCount, getFollowingInProgress} from '../../redux/users-selectors';	


class UsersContainer extends React.Component {
	componentDidMount () {
		const {currentPage, pageSize} = this.props;
		this.props.requestUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const {pageSize} = this.props
		this.props.requestUsers(pageNumber, pageSize);
	}

	render () {
		return	<React.Fragment>
				{this.props.isFetching ? <Preloader /> : null}
				<Users 	totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						users={this.props.users} 
						follow={this.props.follow} 
						unfollow={this.props.unfollow} 
						followingInProgress={this.props.followingInProgress}
					/> 
				</React.Fragment>		
	}
}

let mapSatToProps = (state) => {
	console.log('mapStateToProps USERS')
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),

	}
}

/*let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCounte: (totalCount) => {
			dispatch(setTotalUsersCounteAC(totalCount))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching))
		},
	}
}*/

export default compose(
	connect(mapSatToProps, 
	{
		follow, unfollow, 
		setCurrentPage, 
		toggleFollowingProgress, requestUsers
	}),
)(UsersContainer);
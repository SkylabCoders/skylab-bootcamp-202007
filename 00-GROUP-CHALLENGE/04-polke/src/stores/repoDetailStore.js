import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change';
<<<<<<< HEAD

=======
let _repoInfo = [];
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
let _groupInfo = [];
let _rankingInfo = [];

class RepoInfoStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}
<<<<<<< HEAD

	//GROUP CARD METHODS
=======
	//FIRST CARD METHODS
	calculateDate(first, last) {
		let firsDateArr = first;
		let secondDateArr = last;
		let days;
		let startDay = firsDateArr[2].split('').slice(0, 2).join('');
		let endDay = secondDateArr[2].split('').slice(0, 2).join('');
		days = endDay - startDay;
		let definitString = `${days} days`;
		return definitString;
	}
	calculateLastActivity(dates) {
		return dates.last[0];
	}
	retrieveAuthorCommitsLength(userRepos) {
		return userRepos.length;
	}
	retrieveAuthorCommits(data, AuthorName) {
		let AuthorCommits = data.filter(
			(elem) => elem.commit.author.name === AuthorName
		);
		return AuthorCommits;
	}
	retrieveAuthorComments(data) {
		let AuthorComments = data.map((elem) => elem.commit.message);
		return AuthorComments;
	}
	retrieveLastAuthorComments(data) {
		let AuthorLastCommits = data.slice(0, 2);
		return AuthorLastCommits;
	}
	setUserRepoInfo(userName) {
		let repoInfoStats = {
			length: _repoInfo.length,
			data: _repoInfo,
			name: userName,
			time: 'null',
			authorCommits: 'null',
			authorCommitsLength: 'null',
			authorComments: 'null',
			authourLastComments: 'null',
			lastActivity: 'null'
		};
		repoInfoStats.authorCommits = this.retrieveAuthorCommits(
			repoInfoStats.data,
			repoInfoStats.name
		);
		repoInfoStats.authorCommitsLength = this.retrieveAuthorCommitsLength(
			repoInfoStats.authorCommits
		);
		let dates = {
			last: repoInfoStats.authorCommits[0].commit.author.date.split('-'),
			first: repoInfoStats.authorCommits[
				repoInfoStats.authorCommitsLength - 1
			].commit.author.date.split('-')
		};
		repoInfoStats.time = this.calculateDate(dates.first, dates.last);
		repoInfoStats.lastActivity = this.calculateLastActivity(dates);
		repoInfoStats.authorComments = this.retrieveAuthorComments(
			repoInfoStats.authorCommits
		);
		repoInfoStats.authourLastComments = this.retrieveLastAuthorComments(
			repoInfoStats.authorComments
		);
		return repoInfoStats;
	}
	getUserRepoInfo(userName) {
		let repoInfoStats = this.setUserRepoInfo(userName);
		return repoInfoStats;
	}
	//SECOND CARD METHODS
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
	calculateTotalGroupCommits(data) {
		let totalComits = data.map((elem) => elem.total).reduce((a, b) => a + b, 0);
		return totalComits;
	}
	calculateWeeksofWorkLastYear(data) {
		let weeksWithWorkArr = data.filter((elem) => elem.total >= 1);
		let weeksWithWorkArrLength = weeksWithWorkArr.length;
		return weeksWithWorkArrLength;
	}
	calculateCommitsLastWeek(data, weeksOfWork) {
		let weeksWithWorkArr = data.filter((elem) => elem.total >= 1);
		let lastWeek = weeksWithWorkArr
			.slice(weeksOfWork - 4)
			.map((elem) => elem.total)
			.reduce((a, b) => a + b, 0);
		return lastWeek;
	}
	isActive(lastFourthWeeks) {
<<<<<<< HEAD
		return lastFourthWeeks > 0 ? 'Active' : 'Inactive';
=======
		return lastFourthWeeks > 0 ? 'Active' : 'No Active';
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
	}
	setGroupRepoInfo() {
		let repoGroupInfoStats = {
			data: _groupInfo,
<<<<<<< HEAD
			total: null,
			weeksOfWorkLastYear: null,
			lastFourthWeekCommits: null,
			active: null
=======
			total: 'null',
			weeksOfWorkLastYear: 'null',
			lastFourthWeekCommits: 'null',
			active: 'null'
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
		};
		repoGroupInfoStats.total = this.calculateTotalGroupCommits(
			repoGroupInfoStats.data
		);
		repoGroupInfoStats.weeksOfWorkLastYear = this.calculateWeeksofWorkLastYear(
			repoGroupInfoStats.data
		);
		repoGroupInfoStats.lastFourthWeekCommits = this.calculateCommitsLastWeek(
			repoGroupInfoStats.data,
			repoGroupInfoStats.weeksOfWorkLastYear
		);
		repoGroupInfoStats.active = this.isActive(
			repoGroupInfoStats.lastFourthWeekCommits
		);
		return repoGroupInfoStats;
	}
	getGroupRepoInfo() {
		let repoGroupInfoStats = this.setGroupRepoInfo();
		return repoGroupInfoStats;
	}
<<<<<<< HEAD
	//USER/RANKING CARD METHODS
	retrieveWeeksSinceInit(data) {
		let weeks = data
			.map((elem) => elem.weeks.length)
			.sort()
			.reverse()[0];
		return weeks;
	}
	retrieveUserTotalCommits(data, user) {
		let userCommits = data
			.filter((elem) => elem.author.login === user)
			.map((elem) => elem.total);
		return userCommits[0];
	}
	retrieveGroupTotalCommits(data) {
		let groupCommits = data
			.map((elem) => elem.total)
			.reduce((a, b) => a + b, 0);
		return groupCommits;
=======
	//THIRD CARD METHODS
	retrieveUserTotalCommits(data, user) {
		let userCommits = data
			.filter((elem) => elem.author.login === 'infohab')
			.map((elem) => elem.total);
		return userCommits;
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
	}
	setCommitsRankingWinnersArr(data) {
		let usersRanking = [...data]
			.sort((a, b) => {
				return a.total - b.total;
			})
			.reverse()
			.splice(0, 3);
		return usersRanking;
	}
	retrieveNamesFromArray(arr) {
		let nameArray = arr.map((elem) => elem.author.login);

		return nameArray;
	}
	retrieveNumberOfCommitsFromArray(arr) {
		let numberOfCommits = arr.map((elem) => elem.total);

		return numberOfCommits;
	}
<<<<<<< HEAD
	setUserImg(user, data) {
		let userUrl = data
			.filter((elem) => elem.author.login === user)
			.map((user) => user.author.avatar_url);
		return userUrl;
	}
	retrieveUserLinesOfCodeAdded(user, data) {
		try {
			let filteredUser = data.filter((elem) => elem.author.login === user);
			let weeks = filteredUser[0].weeks;
			let linesOfCodeAdded = weeks
				.map((elem) => elem.a)
				.reduce((a, b) => a + b, 0);
			return linesOfCodeAdded || 0;
		} catch (error) {}
	}
	retrieveUserLinesOfCodeDeleted(user, data) {
		try {
			let filteredUser = data.filter((elem) => elem.author.login === user);
			let weeks = filteredUser[0].weeks;
			let linesOfCodeDeleted = weeks
				.map((elem) => elem.d)
				.reduce((a, b) => a + b, 0);
			return linesOfCodeDeleted || 0;
		} catch (error) {}
	}
	retrieveUserWeeksSinceFirstCommit(user, data) {
		try {
			let weeksSinceFirstUserCommit = 0;
			let userWeeksData = data
				.filter((elem) => elem.author.login === user)
				.map((elem) => elem.weeks);
			let userWeeksLength = data
				.filter((elem) => elem.author.login === user)
				.map((elem) => elem.weeks.length);
			let indexFirstCommit =
				userWeeksData[0].findIndex((elem) => elem.c >= 1) + 1;
			weeksSinceFirstUserCommit = userWeeksLength - indexFirstCommit;
			return weeksSinceFirstUserCommit || 'undefined';
		} catch (error) {}
	}
	setRankingRepoInfo(userName) {
		let repoRankingInfoStats = {
			data: _rankingInfo,
			commitsRankingArr: null,
			commitsRankingNames: null,
			commitsRankingTotalNumber: null,
			groupCommits: null,
			weeksSinceStart: null,
			userLinesAdded: null,
			userLinesDeleted: null,
			userLinesDeleted: null,
			userCommits: null,
			userName: userName,
			userWeeksSinceFirstCommit: null,
			userImg: null
=======
	setRankingRepoInfo(userName) {
		let repoRankingInfoStats = {
			data: _rankingInfo,
			user: userName,
			userCommits: 'null',
			commitsRankingArr: 'null',
			commitsRankingNames: 'null',
			commitsRankingTotalNumber: 'null'
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
		};
		repoRankingInfoStats.commitsRankingArr = this.setCommitsRankingWinnersArr(
			repoRankingInfoStats.data
		);
		repoRankingInfoStats.commitsRankingNames = this.retrieveNamesFromArray(
			repoRankingInfoStats.commitsRankingArr
		);
		repoRankingInfoStats.commitsRankingTotalNumber = this.retrieveNumberOfCommitsFromArray(
			repoRankingInfoStats.commitsRankingArr
		);
		repoRankingInfoStats.userCommits = this.retrieveUserTotalCommits(
			repoRankingInfoStats.data,
<<<<<<< HEAD
			repoRankingInfoStats.userName
		);
		repoRankingInfoStats.groupCommits = this.retrieveGroupTotalCommits(
			repoRankingInfoStats.commitsRankingArr
		);
		repoRankingInfoStats.weeksSinceStart = this.retrieveWeeksSinceInit(
			repoRankingInfoStats.data
		);
		repoRankingInfoStats.userImg = this.setUserImg(
			repoRankingInfoStats.userName,
			repoRankingInfoStats.data
		);
		repoRankingInfoStats.userLinesAdded = this.retrieveUserLinesOfCodeAdded(
			repoRankingInfoStats.userName,
			repoRankingInfoStats.data
		);
		repoRankingInfoStats.userLinesDeleted = this.retrieveUserLinesOfCodeDeleted(
			repoRankingInfoStats.userName,
			repoRankingInfoStats.data
		);
		repoRankingInfoStats.userWeeksSinceFirstCommit = this.retrieveUserWeeksSinceFirstCommit(
			repoRankingInfoStats.userName,
			repoRankingInfoStats.data
		);
		return repoRankingInfoStats;
	}
	getRankingRepoInfo(username) {
		let repoRankingInfoStats = this.setRankingRepoInfo(username);
=======
			repoRankingInfoStats.user
		);
		return repoRankingInfoStats;
	}
	getRankingRepoInfo(userName) {
		let repoRankingInfoStats = this.setRankingRepoInfo(userName);
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
		return repoRankingInfoStats;
	}
}

const repoInfoStore = new RepoInfoStore();

dispatcher.register((action) => {
	switch (action.type) {
<<<<<<< HEAD
=======
		case actionTypes.LOAD_REPO:
			_repoInfo = action.data;
			repoInfoStore.emitChange(_repoInfo);
			break;
>>>>>>> 791b97061b02c076512acefb87fd635a0ae6c714
		case actionTypes.LOAD_GROUP:
			_groupInfo = action.data;
			repoInfoStore.emitChange(_groupInfo);
			break;
		case actionTypes.LOAD_RANKING:
			_rankingInfo = action.data;
			repoInfoStore.emitChange(_rankingInfo);
			break;
		default:
			break;
	}
});

export default repoInfoStore;

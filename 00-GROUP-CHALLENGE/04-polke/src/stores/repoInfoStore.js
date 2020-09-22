import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change';
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

	//GROUP CARD METHODS
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
		return lastFourthWeeks > 0 ? 'Active' : 'Inactive';
	}
	setGroupRepoInfo() {
		let repoGroupInfoStats = {
			data: _groupInfo,
			total: null,
			weeksOfWorkLastYear: null,
			lastFourthWeekCommits: null,
			active: null
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
	setUserImg(user, data) {
		let userUrl = data
			.filter((elem) => elem.author.login === user)
			.map((mapUser) => mapUser.author.avatar_url);
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
			userCommits: null,
			userName: userName,
			userWeeksSinceFirstCommit: null,
			userImg: null
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
		return repoRankingInfoStats;
	}
}

const repoInfoStore = new RepoInfoStore();

dispatcher.register((action) => {
	switch (action.type) {
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

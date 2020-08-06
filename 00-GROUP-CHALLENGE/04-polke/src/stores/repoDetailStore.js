import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _repoInfo = [];
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
		return lastFourthWeeks > 0 ? 'Active' : 'No Active';
	}
	setGroupRepoInfo() {
		let repoGroupInfoStats = {
			data: _groupInfo,
			total: 'null',
			weeksOfWorkLastYear: 'null',
			lastFourthWeekCommits: 'null',
			active: 'null'
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
	//THIRD CARD METHODS
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
	setRankingRepoInfo(userName) {
		let repoRankingInfoStats = {
			data: _rankingInfo,
			user: userName,
			userCommits: 'null',
			commitsRankingArr: 'null',
			commitsRankingNames: 'null',
			commitsRankingTotalNumber: 'null'
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
		return repoRankingInfoStats;
	}
	getRankingRepoInfo(userName) {
		let repoRankingInfoStats = this.setRankingRepoInfo(userName);
		return repoRankingInfoStats;
	}
}

const repoInfoStore = new RepoInfoStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_REPO:
			_repoInfo = action.data;
			repoInfoStore.emitChange(_repoInfo);
			break;
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

import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _repoInfo = [];
let _groupInfo = [];

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
	setUserRepoInfo(userName) {
		let repoInfoStats = {
			length: _repoInfo.length,
			data: _repoInfo,
			name: 'null',
			time: 'null',
			authorCommits: 'null',
			authorCommitsLength: 'null',
			authorComments: 'null',
			authourLastComments: 'null',
			lastActivity: 'null'
		};
		repoInfoStats.name = userName; //Sets user
		/* 	repoInfoStats.time = this.calculateDate(dates.first, dates.last); */
		repoInfoStats.authorCommits = repoInfoStats.data.filter(
			//Set user Data
			(elem) => elem.commit.author.name === repoInfoStats.name
		);
		repoInfoStats.authorCommitsLength = repoInfoStats.authorCommits.length; //Set number of user commits
		let dates = {
			last: repoInfoStats.authorCommits[0].commit.author.date.split('-'),
			first: repoInfoStats.authorCommits[
				repoInfoStats.authorCommitsLength - 1
			].commit.author.date.split('-')
		};
		repoInfoStats.time = this.calculateDate(dates.first, dates.last);
		repoInfoStats.lastActivity = this.calculateLastActivity(dates);
		repoInfoStats.authorComments = repoInfoStats.authorCommits.map(
			//Set author comments
			(elem) => elem.commit.message
		);
		repoInfoStats.authourLastComments = repoInfoStats.authorComments.slice(
			0,
			3
		);
		return repoInfoStats;
	}
	getUserRepoInfo(userName) {
		let repoInfoStats = this.setUserRepoInfo(userName);
		return repoInfoStats;
	}
	calculateTotalGroupCommits(data) {
		let totalComits = data.map((elem) => elem.total).reduce((a, b) => a + b, 0);
		return totalComits;
	}
	calculateWeeksofWorkLastYear(data) {
		let weeksWithWorkArr = data.filter((elem) => elem.total >= 1);
		let weeksWithWorkArrLength = weeksWithWorkArr.length;
		return weeksWithWorkArrLength;
	}
	setGroupRepoInfo() {
		let repoGroupInfoStats = {
			data: _groupInfo,
			total: 'null',
			weeksOfWorkLastYear: 'null'
		};
		repoGroupInfoStats.total = this.calculateTotalGroupCommits(
			repoGroupInfoStats.data
		);
		repoGroupInfoStats.weeksOfWorkLastYear = this.calculateWeeksofWorkLastYear(
			repoGroupInfoStats.data
		);
		return repoGroupInfoStats;
	}
	getGroupRepoInfo() {
		let repoGroupInfoStats = this.setGroupRepoInfo();
		return repoGroupInfoStats;
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
		default:
			break;
	}
});

export default repoInfoStore;

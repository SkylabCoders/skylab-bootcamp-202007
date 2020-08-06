import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _repoInfo = [];
function calculateDate(first, last) {
	let firsDateArr = first;
	let secondDateArr = last;
	let days;
	let startDay = firsDateArr[2].split('').slice(0, 2).join('');
	let endDay = secondDateArr[2].split('').slice(0, 2).join('');
	days = endDay - startDay;
	let definitString = `${days} days`;
	return definitString;
}

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
	getRepoInfo(userName) {
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
		let name = userName;
		repoInfoStats.name = name;
		let dates = {
			last: repoInfoStats.data[0].commit.author.date.split('-'),
			first: repoInfoStats.data[
				repoInfoStats.length - 1
			].commit.author.date.split('-')
		};
		repoInfoStats.time = calculateDate(dates.first, dates.last);
		repoInfoStats.authorCommits = repoInfoStats.data.filter(
			(elem) => elem.commit.author.name === repoInfoStats.name
		);
		repoInfoStats.authorCategory = repoInfoStats.authorCommits[0].author.type;
		repoInfoStats.authorCommitsLength = repoInfoStats.authorCommits.length;
		repoInfoStats.lastActivity = dates.last[0];
		repoInfoStats.authorComments = repoInfoStats.authorCommits.map(
			(elem) => elem.commit.message
		);
		repoInfoStats.authourLastComments = repoInfoStats.authorComments.slice(
			0,
			4
		);
		return repoInfoStats;
	}
}

const repoInfoStore = new RepoInfoStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_REPO:
			_repoInfo = action.data;
			repoInfoStore.emitChange(_repoInfo);
			break;
		default:
			break;
	}
});

export default repoInfoStore;

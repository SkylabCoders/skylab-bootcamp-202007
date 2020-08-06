import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _repoInfo = [];
function calculateDate(first, last) {
	let firsDateArr = first;
	let secondDateArr = last;
	let month;

	if (last[1] - first[1] === 0) {
		month = 0;
	} else {
		month = last[1] - first[1];
	}
	return month;
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
	getRepoInfo() {
		let repoInfoStats = {
			length: _repoInfo.length,
			data: _repoInfo,
			name: 'null',
			time: 'null'
		};
		let name = repoInfoStats.data[0].commit.author.name;
		repoInfoStats.name = name;
		let dates = {
			last: repoInfoStats.data[0].commit.author.date.split('-'),
			first: repoInfoStats.data[
				repoInfoStats.length - 1
			].commit.author.date.split('-')
		};
		console.log('mira' + calculateDate(dates.first, dates.last));
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

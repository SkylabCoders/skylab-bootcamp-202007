import repoDetailStore from '../stores/repoDetailStore';
import actionTypes from '../actions/actionTypes';
import { loadGroupRepoInfo } from '../actions/repoDetailActions';
import dispatcher from '../dispatcher';

describe('RepoDetail Store', () => {
	it('should create', () => {
		expect(repoDetailStore).toBeDefined();
	});

	it('should register LOAD_GROUP', () => {
		const action = {
			type: actionTypes.LOAD_GROUP,
			data: [
				{
					active: 'Inactive',
					data: [
						{
							author: 'phortela1n',
							description: 'This repo has a description.',
							id: 1,
							language: 'Lang. mix',
							lastUpdate: '10/02/2020',
							name: 'Dani',
							userName: 'danio'
						}
					],
					lastFourthWeekCommits: 0,
					total: NaN,
					weeksOfWorkLastYear: 0
				}
			]
		};
		dispatcher.dispatch(action);
		expect(repoDetailStore.getGroupRepoInfo()).toBeDefined();
	});
	it('should register LOAD_RANKING', () => {
		const action = {
			type: actionTypes.LOAD_RANKING,
			data: ''
		};
		dispatcher.dispatch(action);
		expect(repoDetailStore.getRankingRepoInfo()).toBeDefined();
	});
	it('should register ', () => {
		const action = {
			type: actionTypes.LOAD_GROUP,
			data: ''
		};
		dispatcher.dispatch(action);
		expect(loadGroupRepoInfo().toBeUndefined());
	});

	it('should subscribe to addChangeListener', () => {
		const mockFunct = jest.fn();
		repoDetailStore.addChangeListener(mockFunct);
		repoDetailStore.emitChange();
		expect(mockFunct).toHaveBeenCalled();
	});

	it('should unsubscribe from addChangeListener', () => {
		const mockFunct = jest.fn();
		repoDetailStore.addChangeListener(mockFunct);
		repoDetailStore.emitChange();
		repoDetailStore.removeChangeListener(mockFunct);
		expect(mockFunct).toHaveBeenCalled();
	});
});

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action.types';

const CHANGE_EVENT = 'change';

let _alerts = [];
let _alertsActive = [];
let _alertsByCategories = [];
let _alertsFilteredByUser = [];
let _alertsFilteredByFollow = [];
let _alertById = null;

class AlertStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getAlertsByCategories(category) {
		_alertsByCategories = _alertsActive.filter((alert) => alert.animal ===  category);
		return _alertsByCategories;
	}


	getAlertsFiltered() {
		_alertsActive = _alerts.filter((alert) => alert.active ===  true);
		return _alertsActive;
	}

	getAlertsFilteredByUser(id) {
		_alertsFilteredByUser = _alerts.filter((alert) => alert.created ===  id);
		return _alertsFilteredByUser;
	}

	getAlertsFilteredByFollow(user) {
		_alertsFilteredByFollow = [];
		for(let i = 0; i < _alerts.length; i++){
			for (let j = 0; j < _alerts[i].followed.length; j++) { 
				 
			 if(_alerts[i].followed[j] === user)_alertsFilteredByFollow = [..._alertsFilteredByFollow,_alerts[i]];
				
			}
		}
		return _alertsFilteredByFollow;
	} 

	getAlerts() {
		return _alerts;
	}

	getAlertById() {
		return _alertById;
	}
}

const alertStore = new AlertStore();
dispatcher.register((action) => {
	
	switch (action.type) {
		case actionTypes.LOAD_ALERTS:
			_alerts = action.data;
			alertStore.emitChange();
			break;
		case actionTypes.LOAD_ALERT_BYID:
			_alertById = action.data;
			alertStore.emitChange();
			break;
		case actionTypes.CLOSE_ALERT:
			_alertById = action.data;
			alertStore.emitChange();
			break;
		case actionTypes.FOLLOW_ALERT:
			_alertById = action.data;
			alertStore.emitChange();
				break;
		case actionTypes.UPDATE_COMMENTS_ALERT: 
			_alertById = action.data;
			alertStore.emitChange();
			break;
		default:
			break;
	}
});

export default alertStore;

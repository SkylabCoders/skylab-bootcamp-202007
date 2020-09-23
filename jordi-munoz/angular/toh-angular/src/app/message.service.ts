import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	_messages: string[] = [];

	constructor() {}

	getMessages() {
		return this._messages;
	}

	addMessage(message: string) {
		this._messages = [...this._messages, message];
	}

	clearMessages() {
		this._messages = [];
	}
}

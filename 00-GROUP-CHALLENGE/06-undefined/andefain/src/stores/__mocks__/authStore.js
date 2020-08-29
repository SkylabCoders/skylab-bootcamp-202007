const authStore = {
	logged: false,
	setLogged(val) {
		this.logged = val;
	},

	addChangeListener(callback) {},
	removeChangeListener(callback) {},
	isLogged() {
		return this.logged;
	}
};

export default authStore;

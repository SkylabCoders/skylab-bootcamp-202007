var globalObject = this
var foo = () => this

const obj = {
	name: 'dani',
	sayHi: {
		saybye: {
			sayNothing: {
				saySomething: () => this,
			},
		},
	},
}

console.log(obj.sayHi.saybye.sayNothing.saySomething())

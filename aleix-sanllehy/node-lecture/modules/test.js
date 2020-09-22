// This file acts as a module, out of the global scope
console.log('Hello Node');
console.log(__filename);

function fn() {
	console.log(arguments);
}

fn(1, 2, 5, 6);
fn(2 + 2);
fn(true);

function dynamicArgsFunction() {
	console.log(arguments);
}

dynamicArgsFunction('Hello Node', true, [1, 3, 4, 5], 'abcs');

//function (exports, module, require, __filename, __dirname) {

//moduleWrapperFunction (exports, module, require, __filename, __dirname);
console.log(arguments);
//}

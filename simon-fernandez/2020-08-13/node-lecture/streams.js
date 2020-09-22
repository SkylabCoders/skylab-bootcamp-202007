/*process.stdin.on('readable',()=>{
	const chunk=process.stdin.read();
	chunk && process.stdout.write(chunk)
})*/

//process.stdin.pipe(process.stdout);
setTimeout(()=> process.exit(),1000);
process.on('exit',()=>{console.log("Bye bye Fuckers")})
console.log('YOOOOOO')

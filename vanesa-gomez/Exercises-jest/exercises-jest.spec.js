describe('Jest exercises', () => {
	describe('Level 7kyu exercises', () => {
		describe('Function that removes the spaces from the values and returns an array showing the space decreasing', () => {
			function spaceRunOut(array) {
				let response = [];
				array.forEach((element, index) => {
					if (index === 0) {
						response.push(element);
					} else {
						response.push(response[response.length - 1] + element);
					}
				});
				return response;
			}

			it('Param should be an array', () => {
				let param = ['hello', 'world'];
				expect(Array.isArray(param)).toBe(true);

				param = 'hello';
				expect(Array.isArray(param)).toBe(false);
			});

			it('Should return ["hello","world"] to ["hello", "helloworld"]', () => {
				expect(spaceRunOut(['hello', 'world'])).toEqual([
					'hello',
					'helloworld'
				]);
			});
		});
		describe('Function that returns a sequence (index begins with 1) of all the even characters from a string', () => {
			let response = [];
			function evenChars(param) {
				if (param.length < 1 || param.length > 100) {
					console.log('invalid string');
				} else {
					let paramArray = param.split('');
					paramArray.forEach((param, index) => {
						if (index % 2 == 1) {
							response.push(param);
						}
						return console.log(response);
					});
				}
			}

			it('Should return an array with odd index', () => {
				let param = 'abcdefghijklm';
				expect(evenChars(param)).toEqual(['b', 'd', 'f', 'h', 'j', 'l']);
			});
			it('Should return "invalid string"', () => {
				let param = 'a';
				expect(evenChars(param)).toBe('invalid string');
			});
		});
	});
});

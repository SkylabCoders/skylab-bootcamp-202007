function heroDashboard() {
	const [a, b, c, d] = document.querySelectorAll('.item');
	a.innerHTML = heroList[0].name;
	b.innerHTML = heroList[1].name;
	c.innerHTML = heroList[2].name;
	d.innerHTML = heroList[3].name;

	a.href = `../hero-detail/hero-detail.component.html?heroId=${heroList[0].id}`;
	b.href = `../hero-detail/hero-detail.component.html?heroId=${heroList[1].id}`;
	c.href = `../hero-detail/hero-detail.component.html?heroId=${heroList[2].id}`;
	d.href = `../hero-detail/hero-detail.component.html?heroId=${heroList[3].id}`;
}
try {
	heroDashboard();
} catch (error) {
	console.log('Hi tester ==> ', error);
}

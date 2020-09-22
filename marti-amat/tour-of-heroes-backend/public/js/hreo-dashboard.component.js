function heroDashboard() {
    const [a, b, c, d] = document.querySelectorAll('.item');
    a.innerHTML = LIST_HEROES[0].name;
    b.innerHTML = LIST_HEROES[1].name;
    c.innerHTML = LIST_HEROES[2].name;
    d.innerHTML = LIST_HEROES[3].name;

    a.href = `../../hero-detail?heroId=${LIST_HEROES[0].id}`;
    b.href = `../../hero-detail?heroId=${LIST_HEROES[1].id}`;
    c.href = `../../hero-detail?heroId=${LIST_HEROES[2].id}`;
    d.href = `../../hero-detail?heroId=${LIST_HEROES[3].id}`;
}
try {
    heroDashboard();
} catch (error) {
    console.log('Hi tester ==> ', error);
}
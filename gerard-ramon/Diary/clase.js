let singer = { surname: 'turner' };
let pilot = { surname: 'kamal' };

// let temp = singer.surname; // guardo surname de singer
// singer.surname = pilot.surname; // poso singer el cognom de pilot
// pilot.surname = temp; //a pilot li poso el congnom de singer (que he guardat abans)

singer.surname = [pilot.surname, pilot.surname = singer.surname][0];

console.log(singer.surname);
console.log(pilot.surname);
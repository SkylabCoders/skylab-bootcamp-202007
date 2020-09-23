import Hero from './hero';
// Como hemos definido Hero que tendria un id que seria un numero y un name que seria string, aqui le hestamos diciendo que HEROES seria un array con Hero, y alli que hero es un objecto. Con lo qual HEROES sera un array de objetos
export const HEROES: Hero[] = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

export interface stateInterface {
	cart: number[];
	products: {
		name: string;
		price: number;
		img: string;
		inCart: boolean;
		id: number;
	}[];
}

export interface actionInterface {
	type: string;
	payload: any;
}

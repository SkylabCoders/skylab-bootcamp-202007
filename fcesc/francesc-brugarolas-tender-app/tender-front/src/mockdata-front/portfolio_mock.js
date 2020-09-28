const portfolio_mock = [
  {
    _id: '2x8jf0349',
    title: 'House in Bahamas',
    description: 'Luxury home in the Bahamas islands. With a stylish minimalist design, space flows through the patios to allow a fluid spatial experience. Equipped with an infinity pool as well as a private pier.',
    status: 'ongoing',
    location: {
      country: 'Bahamas',
      region: 'Spanish Wells Island',
      city: 'Spanish Wells',
      street: 'South St 34',
      postalCode: 'XK40G',
      latitude: 225.5431905,
      longitude: -76.7682582
    },
    estimate: {
      budget: 20000000,
      currency: 'eur',
      completion: '2020-10-11T12:00:00.000Z'
    },
    current: {
      budget: 20500000,
      invested: 0.8,
      currency: 'eur',
      completion: '2020-10-17T12:00:00.000Z'
    },
    slug: 'house-spanish-wells-bahamas',
    img: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    _id: '2x8jfa449',
    title: 'Hacienda refurbishment',
    description: 'Refurbishment of an old Hacienda in Mexico, close to DF, 50.000 acres of land',
    status: 'planned',
    location: {
      country: 'Mexico',
      region: 'Mexico Distrito Federal',
      city: 'Monterey',
      street: 'Calle Cocoyoc 138',
      postalCode: '2352C',
      latitude: 25.6825931,
      longitude: -100.2895959
    },
    estimate: {
      budget: 580000000,
      currency: 'eur',
      completion: '2021-11-25T12:00:00.000Z'
    },
    current: {
      budget: 0,
      invested: 0.05,
      currency: 'eur',
      completion: '2021-11-25T12:00:00.000Z'
    },
    slug: 'hacienda-refurbishment',
    img: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    _id: '2x56y0349',
    title: 'Winter house in Switzerland',
    description: 'Winter house on top of the hill pike, at the heart of the Alps in the most pure Schwarzenbald style.',
    status: 'closed',
    location: {
      country: 'Switzerland',
      region: 'Wallis',
      city: 'Vals',
      street: 'Poststrasse 7',
      postalCode: '7132',
      latitude: 46.618097,
      longitude: 9.1756607
    },
    estimate: {
      budget: 200340000,
      currency: 'chf',
      completion: '2019-10-11T12:00:00.000Z'
    },
    current: {
      budget: 20510320,
      invested: 1,
      currency: 'chf',
      completion: '2019-10-28T13:44:05.840Z'
    },
    slug: 'winter-house-vals',
    img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    _id: '2iu0f0349',
    title: 'Cottage in Bali',
    description: 'Small cottage on a breathtaking beach in Bali for family weekends.',
    status: 'ongoing',
    location: {
      country: 'Indonesia',
      region: 'Bali Island',
      city: 'Singaraja',
      street: 'Jl. Sudirman Gg. 3, 12',
      postalCode: 'BA46',
      latitude: -8.5387865,
      longitude: 114.9914523
    },
    estimate: {
      budget: 1000000,
      currency: 'usd',
      completion: '2020-12-03T12:00:00.000Z'
    },
    current: {
      budget: 1020000,
      invested: 0.6,
      currency: 'usd',
      completion: '2020-12-06T12:00:00.000Z'
    },
    slug: 'cottage-bali',
    img: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
]

export default portfolio_mock;
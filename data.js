export const inventory = [
  {
    id: '1',
    name: 'Crop Top',
    price: '106',
    description: 'this is a crop top',
    category: 'crop top',
    details: {
      materials: ['cotton', 'spandex'],
      fits: ['oversized'],
      additional: ['hemmed bottoms', 'discolored', 'seasonsed', 'distressed'],
      dimensions: ['13in x 14in'],
      sourced: ['details about source']
    },
    image: {
      main: '/inventory/corvette1.jpeg',
      back: '/inventory/testback.jpg',
      front: '/inventory/testfront.jpg',
      additional: '/inventory/corvette1.jpeg'
    },

    collectionID: 1,
    profileIDs: [],
    sm: 1,
    ml: 1,
    related: ['2', '3', '4', '5']
  },
  {
    id: '2',
    name: 'Retro Top',
    price: '86',
    description: 'this is a crop top as well',
    category: 'dress',

    details: {
      materials: ['nylon'],
      fits: ['oversized'],
      additional: ['hemmed bottoms', 'discolored', 'seasonsed', 'distressed']
    },
    image: {
      main: '/inventory/corvette1.jpeg',
      back: '/inventory/testback.jpg',
      front: '/inventory/testfront.jpg',
      additional: '/inventory/corvette1.jpeg'
    },
    collectionID: 1,
    profileIDs: [],
    sm: 1,
    ml: 0,
    related: ['1', '3', '4', '5']
  },
  {
    id: '3',
    name: 'Racer Dress',
    price: '60',
    description: 'this is a crop top as well',
    category: 'jacket',

    details: {
      materials: ['cotton'],
      fits: ['oversized'],
      additional: ['hemmed bottoms', 'discolored', 'seasonsed', 'distressed']
    },
    image: {
      main: '/inventory/corvette1.jpeg',
      back: '/inventory/testback.jpg',
      front: '/inventory/testfront.jpg',
      additional: '/inventory/corvette1.jpeg'
    },
    collectionID: 1,
    profileIDs: [],
    sm: 0,
    ml: 0,
    related: ['1', '2', '4', '5']
  },
  {
    id: '4',
    name: 'Long Sleeve Syncup',
    price: '30',
    description: 'this is a crop top as well',
    category: 'sport bra crop',

    details: {
      materials: ['nylon'],
      fits: ['mini'],
      additional: ['hemmed bottoms', 'discolored', 'seasonsed', 'distressed']
    },
    image: {
      main: '/inventory/corvette1.jpeg',
      back: '/inventory/testback.jpg',
      front: '/inventory/testfront.jpg',
      additional: '/inventory/corvette1.jpeg'
    },
    collectionID: 1,
    profileIDs: [],
    sm: 0,
    ml: 0,
    related: ['1', '2', '3', '5']
  },
  {
    id: '5',
    name: 'LaLaLa',
    price: '150',
    description: 'this is a crop top as well',
    category: 'crop top',

    details: {
      materials: ['cotton'],
      fit: ['oversized'],
      additional: ['hemmed bottoms', 'discolored', 'seasonsed', 'distressed']
    },
    image: {
      main: '/inventory/corvette1.jpeg',
      back: '/inventory/testback.jpg',
      front: '/inventory/testfront.jpg',
      additional: '/inventory/corvette1.jpeg'
    },
    collectionID: 1,
    profileIDs: [],
    sm: 0,
    ml: 0,
    related: ['1', '2', '3', '4']
  },
]

export const collections = [
  {
    id: '1',
    name: 'CORVETTE x BIAS',
    description: 'Selectively picked by hand, each piece was reworked to best fit their vibe.',
    images: { background: '/collections/marcy-pattern.png', },
    active: true
  },
  {
    id: '2',
    name: 'BIAS FIT',
    description: '',
    images: { background: '/collections/marcy-noback.png', },
    active: false
  },
  {
    id: '3',
    name: 'SYMPTOMS x BIAS',
    description: '',
    images: { background: '/collections/marcy-pattern.png', },
    active: false
  },
]
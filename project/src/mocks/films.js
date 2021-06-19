const films = [{
  id: 1,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 5.9,
  scoresCount: 123,
  director: 'Wes Andreson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runtime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
},{
  id: 2,
  name: 'What we do in the shadows',
  posterImage: 'img/what-we-do-in-the-shadows.jpg',
  previewImage: 'img/what-we-do-in-the-shadows.jpg',
  backgroundImage: 'img/bg-what-we-do-in-the-shadows.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
  rating: 9.9,
  scoresCount: 270,
  director: 'James Cameron',
  starring: ['Arnold Schwarzenegger', 'Michael Biehn', 'Linda Hamilton'],
  runtime: 120,
  genre: 'Action',
  released: 1991,
  isFavorite: true,
},{
  id: 3,
  name: 'Aviator',
  posterImage: 'img/aviator.jpg',
  previewImage: 'img/aviator.jpg',
  backgroundImage: 'img/bg-aviator.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Mark L. Lester',
  starring: ['Jamie Lee Curtis', 'Penelope Ann Miller', 'Carl Weathers'],
  runtime: 109,
  genre: 'Drama',
  released: 1988,
  isFavorite: true,
},{
  id: 4,
  name: 'Midnight Special',
  posterImage: 'img/midnight-special.jpg',
  previewImage: 'img/midnight-special.jpg',
  backgroundImage: 'img/bg-midnight-special.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.',
  rating: 8.0,
  scoresCount: 200,
  director: 'John McTiernan',
  starring: ['Jack Nicholson', 'Marlon Brando', 'Robert De Niro'],
  runtime: 125,
  genre: 'Fantasy',
  released: 1993,
  isFavorite: false,
},{
  id: 5,
  name: 'Bohemian Rhapsody',
  posterImage: 'img/bohemian-rhapsody.jpg',
  previewImage: 'img/bohemian-rhapsody.jpg',
  backgroundImage: 'img/bg-bohemian-rhapsody.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A tough Russian policeman is forced to partner up with a cocky Chicago police detective when he is sent to Chicago to apprehend a Georgian drug lord who killed his partner and fled the country.',
  rating: 7.9,
  scoresCount: 180,
  director: 'Walter Hill',
  starring: ['Al Pacino', 'Daniel Day-Lewis'],
  runtime: 95,
  genre: 'Romance',
  released: 1988,
  isFavorite: false,
},{
  id: 6,
  name: 'Pulp Fiction',
  posterImage: 'img/pulp-fiction.jpg',
  previewImage: 'img/pulp-fiction.jpg',
  backgroundImage: 'img/bg-pulp-fiction.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A tough cop must pose as a kindergarten teacher in order to locate a dangerous criminal\'s ex-wife, who may hold the key to putting him behind bars.',
  rating: 6.9,
  scoresCount: 120,
  director: 'Ivan Reitman',
  starring: ['Dustin Hoffman', 'Tom Hanks', 'Anthony Hopkins', 'Paul Newman'],
  runtime: 90,
  genre: 'Criminal',
  released: 1990,
  isFavorite: false,
},{
  id: 7,
  name: 'Macbeth',
  posterImage: 'img/macbeth.jpg',
  previewImage: 'img/macbeth.jpg',
  backgroundImage: 'img/bg-macbeth.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A fearless, globe-trotting, terrorist-battling secret agent has his life turned upside down when he discovers his wife might be having an affair with a used-car salesman while terrorists smuggle nuclear war heads into the United States.',
  rating: 9.0,
  scoresCount: 240,
  director: 'James Cameron',
  starring: ['Denzel Washington', 'Spencer Tracy', 'Laurence Olivier', 'Jack Lemmon'],
  runtime: 100,
  genre: 'Romance',
  released: 1994,
  isFavorite: false,
},{
  id: 8,
  name: 'Mindhunter',
  posterImage: 'img/mindhunter.jpg',
  previewImage: 'img/mindhunter.jpg',
  backgroundImage: 'img/bg-mindhunter.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.',
  rating: 6.0,
  scoresCount: 132,
  director: 'Mark L. Lester',
  starring: ['Michael Caine', 'James Stewart', 'Robin Williams'],
  runtime: 123,
  genre: 'Comedy',
  released: 2003,
  isFavorite: false,
}];

export default films;

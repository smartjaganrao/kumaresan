const mockMovies = [
  { id: 1, title: 'The Silent Sea', year: 2021, genre: 'Sci-Fi', rating: 7.1, description: 'A tense expedition to the moon.', poster: 'https://picsum.photos/id/1011/300/450', language: 'English' },
  { id: 2, title: 'Hidden Figures', year: 2016, genre: 'Drama', rating: 7.8, description: 'True story of mathematicians at NASA.', poster: 'https://picsum.photos/id/1025/300/450', language: 'English' },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.6, description: 'Space exploration through a wormhole.', poster: 'https://picsum.photos/id/1003/300/450', language: 'English' },
  { id: 4, title: 'The Grand Budapest Hotel', year: 2014, genre: 'Comedy', rating: 8.1, description: 'Whimsical tale of a famous concierge.', poster: 'https://picsum.photos/id/1027/300/450', language: 'English' },
  { id: 5, title: 'Parasite', year: 2019, genre: 'Thriller', rating: 8.6, description: 'A darkly comic thriller about class.', poster: 'https://picsum.photos/id/1062/300/450', language: 'Korean' },
  { id: 6, title: 'Arrival', year: 2016, genre: 'Sci-Fi', rating: 7.9, description: 'First contact with aliens.', poster: 'https://picsum.photos/id/1015/300/450', language: 'English' },
  { id: 7, title: 'Soul', year: 2020, genre: 'Animation', rating: 8.0, description: 'A musician explores the meaning of life.', poster: 'https://picsum.photos/id/1005/300/450', language: 'English' },
  { id: 8, title: 'Tamil Drama Example', year: 2022, genre: 'Drama', rating: 7.2, description: 'A sample Tamil language film.', poster: 'https://picsum.photos/id/1012/300/450', language: 'Tamil' }
]

export function fetchMovies(){
  return new Promise(resolve => {
    setTimeout(() => resolve(mockMovies), 400)
  })
}

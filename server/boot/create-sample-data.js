module.exports = function(app, cb) {
  var rating = app.models.rating;
  var title = app.models.title;
  var genreList = app.models.genreList;
  title.create([
    {
      year: 2011,
      description: 'Little ones can learn a lot from George -- one of the most ' +
      'curious monkeys in all of literature -- with adventures narrated by ' +
      'William H. Macy.',
      rating: 1,
      boxshot: 'http://cdn.test.nflximg.net/images/3670/3843670.jpg',
      name: 'Curious George'
    },
    {
      year: 2011,
      description: 'Hugh Laurie stars as the ornery Dr. Gregory House, a ' +
      'paradoxical physician who loathes his patients but is a genius at ' +
      'treating mysterious ailments.',
      rating: 1.1,
      boxshot: 'http://cdn.test.nflximg.net/images/5161/4185161.jpg',
      name: 'House, M.D.',
    }
  ], cb);
}

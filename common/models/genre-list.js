module.exports = function(GenreList) {
  GenreList.getGenreList = function(userId) {
    return this.find({where: {userId: userId}}).then(function(lists) {
      return lists;
    });
  };

  GenreList.addTitleToGenreList = function(userId, genreIndex, titleId) {
    return this.create({userId: userId, titleId: titleId, name: genreIndex});
  };

  GenreList.removeTitleFromGenreListByIndex = function(userId, genreIndex, titleId) {
    return this.destroyAll({
      userId: userId,
      titleId: titleId,
      name: genreIndex
    });
  }
};

module.exports = function(Rating) {
  Rating.getRatings = function(titleIds, userId) {
    return this.find({where: {titleId: {inq: titleIds}, userId: userId}});
  };

  Rating.setRatings = function(userId, titlesIdsAndRating) {

    function coerce(rating) {
      if (rating > 5)
        return 5;
      else if (rating < 1)
        return 1;
      else
        return rating;
    }

    var updates = [];
    for (var t in titlesIdsAndRating) {
      var update = this.update({
        userId: userId,
        titleId: t
      }, {rating: titlesIdsAndRating[t]});
      updates.push(update);
    }

    return Promise.all(updates);

  };
};

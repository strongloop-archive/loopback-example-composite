module.exports = function(Title) {
  Title.getTitles = function(ids) {
    return this.findByIds(ids);
  }
};

module.exports = function(Title) {
  Title.getTitles = function(ids) {
    return this.findByIds(ids).
      then(function(titles) {
        var titleMap = {};
        titles.forEach(function(t) {
          titleMap[t.id] = {
            doc: t
          };
        });
        return titleMap;
      });
  };
};

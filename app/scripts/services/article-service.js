'use strict';

angular.module('yakApp')
  .service('articleService', function ArticleService() {
    this._articleStore = $.indexedDB("yakDb").objectStore("article");

    this.save = function save(article) {
      var now = Date.now();
      article.createDate = article.createDate || now;
      article.updateDate = now;
      return this._articleStore.add(article);
    };

    this.update = function update(key, article) {
      var now = Date.now();
      article.updateDate = now;
      return this._articleStore.put(article, key);
    };

    this.get = function get(key) {
      return this._articleStore.get(key);
    }
  });

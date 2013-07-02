'use strict';

angular.module('yakApp')
  .service('articleService', function ArticleService() {
    this._articleStore = $.indexedDB("yakDb").objectStore("article");
    
    this.save = function save (article) {
      var now = Data.now();
      article.createDate = article.createDate || now;
      article.updateDate = article.updateDate || now;
      return this._articleStore.add(article); 
    }
  });

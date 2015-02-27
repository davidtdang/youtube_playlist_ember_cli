import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    search: function(){
      var _this = this;
      var query = this.get('newSearchTerm');
      var request = gapi.client.youtube.search.list({
        q: query,
        part: 'snippet'
      });

      request.execute(function(response) {
        console.log(response);
        var newVideos = [];

        for (var i = 0; i < response.items.length; i++) {
          newVideos.push(
            {title: response.items[i].snippet.title,
              description: response.items[i].snippet.description,
              thumbnail: response.items[i].snippet.thumbnails.high.url,
              videoId: "https://www.youtube.com/watch?v=" + response.items[i].id.videoId}
            );
          }
          _this.set('videos', newVideos);
        });
      }
    }
  });

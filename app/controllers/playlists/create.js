import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function(){
    console.log("clicked");
      var playlist = this.get("newPlaylistName");
      return this.store.createRecord('playlist', {name: playlist});
      var _this = this;
      playlist.save().then(function(){
        _this.transitionToRoute('videos.search');
      });

    }
  }

});

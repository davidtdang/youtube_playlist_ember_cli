import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function(){
    console.log("clicked");
      var name = this.get("newPlaylistName");
      var playlist = this.store.createRecord('playlist', {name: name});
      var _this = this;
      playlist.save().then(function(){
        _this.transitionToRoute('videos.search');
      });

    }
  }

});

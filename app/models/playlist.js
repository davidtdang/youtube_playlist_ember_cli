import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  videos: DS.hasMany('video')
});

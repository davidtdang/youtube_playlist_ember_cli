import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr('string'),
  videoId: DS.attr('string'),
  playlist: DS.belongsTo('playlist')
});

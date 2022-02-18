var mongoose = require('mongoose');

require('../mongodb_helper')
var Photo = require('../../models/photos');

describe('Photo model', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.photos.drop(function() {
          done();
      });
  });

  it('has a title', function() {
    var photo = new Photo({ title: 'some title' });
    expect(photo.title).toEqual('some title');
  });

  it('can list all photos', function(done) {
    Photo.find(function(err, photos) {
      expect(err).toBeNull();
      expect(photos).toEqual([]);
      done();
    });
  });

  it('can save a post', function(done) {
    var photo = new Photo({ title: 'some title' });

    photo.save(function(err) {
      expect(err).toBeNull();

      Photo.find(function(err, photos) {
        expect(err).toBeNull();

        expect(photos[0]).toMatchObject({ title: 'some title' });
        done();
      });
    });
  });
});

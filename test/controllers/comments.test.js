import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

describe('Comments Controller Test', () => {
  it('should return list of comments', done => {
    request(app)
      .get('/api/v1/comments')
      .end((err, res) => {
        const { data } = res.body;

        expect(res.statusCode).to.be.equal(200);
        expect(data).to.be.an('array');
        done();
      });
  });

  it('should not create a new comment if data is not provided', done => {
    const comment = {
      author: '',
      comment: '',
      movieId: ''
    };

    request(app)
      .post('/api/v1/comments')
      .send(comment)
      .end((err, res) => {
        const { comment } = res.body.errors;

        expect(res.statusCode).to.be.equal(422);
        expect(comment.msg).to.contains('must not be empty');
        expect(comment).to.be.an('object');
        done();
      });
  });

  it("should not create a new comment if movieId doesn't exists", done => {
    const comment = {
      author: 'Example User',
      comment: 'Lorem ipsum',
      movieId: 99999
    };

    request(app)
      .post('/api/v1/comments')
      .send(comment)
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.statusCode).to.be.equal(500);
        expect(code).to.be.equal(500);
        expect(message).to.contains('Cannot add or update a child row: a foreign key constraint fails');
        done();
      });
  });

  it("should not create a new comment if movieId isn't a int", done => {
    const comment = {
      author: 'Example User',
      comment: 'Lorem ipsum',
      movieId: 'string'
    };

    request(app)
      .post('/api/v1/comments')
      .send(comment)
      .end((err, res) => {
        const { movieId } = res.body.errors;

        expect(res.statusCode).to.be.equal(422);
        expect(movieId.msg).to.contains('must be integer higher than 0');
        expect(movieId).to.be.an('object');
        done();
      });
  });
});

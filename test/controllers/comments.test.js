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
        const { code, message, details } = res.body.error;

        expect(res.statusCode).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details).to.be.an('array');
        expect(details[0]).to.have.property('param', 'author');
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
        const { code, message, details } = res.body.error;

        expect(res.statusCode).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details[0].message).to.be.equal('"movieId" must be a number');
        expect(details[0]).to.have.property('param', 'movieId');
        done();
      });
  });
});

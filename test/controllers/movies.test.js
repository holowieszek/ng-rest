import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

describe('Movies Controller Test', () => {
  it('should return list of movies', done => {
    request(app)
      .get('/api/v1/movies')
      .end((err, res) => {
        const { data } = res.body;

        expect(res.statusCode).to.be.equal(200);
        expect(data).to.be.an('array');
        done();
      });
  });

  it('should not create a new movie if title is not provided', done => {
    const movie = {
      title: ''
    };

    request(app)
      .post('/api/v1/movies')
      .send(movie)
      .end((err, res) => {
        const { title } = res.body.errors;

        expect(res.statusCode).to.be.equal(422);
        expect(title.msg).to.contains('must not be empty');
        expect(title).to.be.an('object');
        expect(title).to.have.property('location', 'body');
        done();
      });
  });

  it('should create a new movie with valid data', done => {
    const movie = {
      title: 'Titanic'
    };

    request(app)
      .post('/api/v1/movies')
      .send(movie)
      .end((err, res) => {
        const { data } = res.body;

        // console.log(data);
        expect(res.statusCode).to.be.equal(201);
        expect(data).to.be.an('object');
        expect(data).to.have.property('title');
        expect(data.title).to.be.equal(movie.title);
        done();
      });
  });

  it('should respond with "not found" error if didnt find movie', done => {
    const movie = {
      title: "This movie doesn't exists123"
    };

    request(app)
      .post('/api/v1/movies')
      .send(movie)
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.statusCode).to.be.equal(404);
        expect(code).to.be.equal(404);
        expect(message).to.be.equal('Movie not found!');
        done();
      });
  });
});

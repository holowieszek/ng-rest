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
        const { code, message, details } = res.body.error;

        expect(res.statusCode).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details).to.be.an('array');
        expect(details[0]).to.have.property('message');
        expect(details[0]).to.have.property('param', 'title');
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

  it('should respond with error if invalid data are passing', done => {
    const movie = {
      invalidKey: 'value'
    };

    request(app)
      .post('/api/v1/movies')
      .send(movie)
      .end((err, res) => {
        const { code, message, details } = res.body.error;

        expect(res.statusCode).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details).to.be.an('array');
        expect(details[0]).to.have.property('message');
        // console.log(details);
        done();
      });
  });
});

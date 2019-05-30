import { expect } from 'chai';
import app from '../src/index';
import request from 'supertest';

describe('Base API Test', () => {
  it('should return API version and title', done => {
    request(app)
      .get('/api/v1')
      .end((err, res) => {
        const { title, version } = res.body;

        expect(res.statusCode).to.be.equal(200);
        expect(title).to.be.equal(app.locals.title);
        expect(version).to.be.equal(app.locals.version);
        done();
      });
  });
});

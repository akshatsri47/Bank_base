import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js'; 

describe('Bank API Endpoints', () => {
  it('GET /api/banks - should return all banks', (done) => {
    request(app)
      .get('/api/banks')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('GET /api/branches/:bankId - should return branches for a specific bank', (done) => {
    const testBankId = 60; 
    request(app)
      .get(`/api/branches/${testBankId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

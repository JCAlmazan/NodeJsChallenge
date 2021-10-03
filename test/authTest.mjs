import { assert } from 'chai';

import fetch from 'node-fetch';

describe('Auth Test', function() {
  
  describe('#loginOk', function() {
    it('should return 201 status code', async function() {
      
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": "jca@jca.com",
          "password": "jca"
        })
      };

      await fetch("http://localhost:3000/auth/login", options).then(function(response) {
        assert.equal(response.status, 201);
      });

    });
  });

  describe('#loginPasswordFail', function() {
    it('should return 401 status code', async function() {
      
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": "jca@jca.com",
          "password": "com"
        })
      };

      await fetch("http://localhost:3000/auth/login", options).then(function(response) {
        assert.equal(response.status, 401);
      });

    });
  });

  describe('#loginUserFail', function() {
    it('should return 404 status code', async function() {
      
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": "jca",
          "password": "jca"
        })
      };

      await fetch("http://localhost:3000/auth/login", options).then(function(response) {
        assert.equal(response.status, 404);
      });

    });
  });

  describe('#registerOK', function() {
    it('should return 201 status code', async function() {
      
      let randomEmail = [...Array(5)].map(i=>(~~(Math.random()*5)).toString(5)).join('');

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": randomEmail + "@gmail.com",
          "password": "test"
        })
      };

      await fetch("http://localhost:3000/auth/register", options).then(function(response) {
        assert.equal(response.status, 201);
      });

    });
  });

  describe('#registerEmailFail', function() {
    it('should return 404 status code', async function() {

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": "test",
          "password": "test"
        })
      };

      await fetch("http://localhost:3000/auth/register", options).then(function(response) {
        assert.equal(response.status, 404);
      });

    });
  });

  describe('#registerDuplicateFail', function() {
    it('should return 400 status code', async function() {

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": "jca@jca.com",
          "password": "jca"
        })
      };

      await fetch("http://localhost:3000/auth/register", options).then(function(response) {
        assert.equal(response.status, 400);
      });

    });
  });

});
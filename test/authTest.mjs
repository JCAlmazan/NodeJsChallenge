import { assert } from 'chai';

import fetch from 'node-fetch';

// Authentication tests
describe('Auth Test', function() {
  
  // Login succesful test
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

  // Login test when giving a wrong password
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

  // Login test when giving a non existing User
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

  // Register succesful test
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

  // Register test when giving a wrong format email
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

  // Register test when giving a duplicate email
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
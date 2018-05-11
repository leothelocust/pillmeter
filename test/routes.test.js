'use strict'

var app = require('../app')
var chai = require('chai')
var request = require('supertest')

var expect = chai.expect

describe('Integration Tests', function () {
    describe('# GET /', function () {
        it('should get the homepage', function (done) {
            request(app).get('/')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200)
                    done()
                })
        })
    })
    describe('# GET /core.css', function () {
        it('should get the css file', function (done) {
            request(app).get('/core.css')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200)
                    done()
                })
        })
    })
    describe('# GET /something-not-here', function () {
        it('should get the 404 page', function (done) {
            request(app).get('/something-not-here')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(404)
                    done()
                })
        })
    })
})
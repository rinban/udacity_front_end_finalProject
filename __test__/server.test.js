// import { fetchingData } from "../src/client/js/fetchingData"
const app = require('../src/server/server');
const supertest = require('supertest')
const request = supertest(app);

// const request = supertest(test)

describe("Testing the server functionality", () => {
    it("Testing the server function", () => {

        const data =  request.get('/test').expect(200)

    })
});




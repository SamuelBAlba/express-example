//import our express app and supertest for HTTP request
const request = require('supertest')
const app = require('./app')


test('It should respond with Hello World!', async () => {
    // we are going to send a request to our application
    //and verify that the respones match what we expect
    const res = await request(app).get('/');
    // 'string' === 'string'
    expect(res.text).toBe('Hello World')
})

//create route that shows students name based on url params
test('It should show the students name', async () => {
    const name = 'Samuel';
    const res = await request(app).get(`/students/${name}`);
    expect(res.text).toBe(`Profile: ${name}`);
});

//create a roye that shows the admin dashboard
//GET dashboard

// test('It should show admin dashboard', async () => {
//     const res = await request(app).get('/dashboard')
//     expect(res.text).toBe('at the dash')
// })


import supertest from 'supertest';
import app from '../index';
import { supabase } from '../supabase'

describe('/products route', () => {
    describe('GET /products', () => {
        it('should retrieve all categories successfully', async () => {
            const response = await supertest(app).get('/products');
            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.result).toBeDefined();
        })
    })
    describe('GET /products/:category', () => {
        it('should retrieve all products in a category successfully', async () => {
            const response = await supertest(app).get('/products/motherboards');
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
        })
        it('should respond with 404 for an invalid category', async () => {
            const response = await supertest(app).get('/products/asdasdd');
            expect(response.status).toBe(404);
        })
        test('should respond with status 500 for an error', async () => {
            const spy = jest.spyOn(supabase, 'from').mockImplementation(() => {
                throw new Error();
            });
            const response = await supertest(app).get('/products/motherboards');
            expect(response.status).toBe(500);

            spy.mockRestore();
        });
    })
})
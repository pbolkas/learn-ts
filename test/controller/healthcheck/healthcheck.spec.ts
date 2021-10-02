import request from "supertest";
import { expect } from "chai";
import createServer from "server"

const app = createServer();

describe('healthcheck', () =>{
  it('checking healthcheck endpoint ', (done) =>{
    request(app).get("/healthcheck").expect(200, done);
  });
});
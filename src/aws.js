import aws from '@fastify/aws-lambda';
import app from "./server.js";

export const handler = aws(app);
await app.ready()
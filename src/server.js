import fastify from 'fastify';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import fastifySensible from '@fastify/sensible';
import fastifyAutoload from '@fastify/autoload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
});

await app.register(fastifySensible);

await app.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
    forceESM: true
});

await app.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
    options:{
        prefix: '/api'
    },
    forceESM: true
});


await app.ready()
app.log.info(app.printRoutes());


export default app;
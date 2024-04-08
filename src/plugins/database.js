import fp from "fastify-plugin";
import fastifyPostgres from "@fastify/postgres";

export default fp(async app => {
    app.register(fastifyPostgres, {
        user: "",
        password: "",
        host: "",
        port: 5432,
        database: "postgres",
        ssl: {
            rejectUnauthorized: false
        }
    });
})
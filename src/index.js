import app from "./server.js";

try {
    await app.listen({
        port: 3000
    }); 
} catch (error) {
    console.log('error', error);
}

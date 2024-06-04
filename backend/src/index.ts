import env from './config/env';
import server from './server';

const port = env.PORT;

function startServer() {
  server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
}

startServer();

const server = require('./api/server.js');

const port = 5000;

server.listen(port, () => {
  console.log(`\n=== SERVER LISTENING ON ${port} ===\n`)
})
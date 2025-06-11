const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8", // ← Ушуну коштук
  });
  res.end("Салам, бул Node.js серверден жооп!");
});

server.listen(3000, () => {
  console.log("Сервер 3000 портунда иштеп жатат");
});


const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Siphelele",
        lastName: "Zulu",
      })
    );

  } else if (req.url === "/post" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on('end', ()=>{
      console.log(body)
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Data received", data: body }));
    })


  } else {
    res.writeHead(404);
    res.end("Page not found, ufunani");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

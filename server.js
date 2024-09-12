const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("We are live baby!!!\n");
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sphllzulu/basicServer.git
git push -u origin main
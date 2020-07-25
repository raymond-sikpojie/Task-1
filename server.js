const http = require("http");

const port = 3000;
let queryData = "";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World, Welcome to WeJapa Internships");

  if (req.method === "POST") {
    req.on("data", (data) => {
      queryData = data;
    });
    req.on("end", () => {
      let name = JSON.parse(queryData);
      return res.end(`Hello ${name}, Welcome to WeJapa Internship!`);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

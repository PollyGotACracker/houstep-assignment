import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const __dirname = path.resolve();
const router = jsonServer.router(path.join(__dirname + "/src/db/db.json"));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname + "/.next/"),
});

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log(`Http Listening on http://localhost:${port}`);
  console.log("JSON Server is running");
});

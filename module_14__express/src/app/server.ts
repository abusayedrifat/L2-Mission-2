import { client } from "../config/mongodb";

import app from "./app";

let server;
const port = 5000;

const bootServer = async () => {
  await client.connect();
  console.log("connected to mongodb");

  server = app.listen(port, () => {
  console.log(`listening from ${port}`);

  });
};

bootServer();

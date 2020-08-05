import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import http from "http";
import container from "./container";
import Router from "express-promise-router";

container.resolve((users) => {
  const SetupExpress = () => {
    const app = express();
    const server = http.createServer(app);
    server.listen(3000, () => {
      console.log("Listening on PORT 3000");
    });

    // setup configureExpress
    configureExpress(app);
    // setup router
    const router = Router();
    users.SetRouting(router);

    app.use(router);
  };

  // setup setupExpress
  const app = SetupExpress();

  function configureExpress(app) {
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }
});

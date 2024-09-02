import express from "express";
const app = express();
app.use(express.json());

app.get("/", function (request, response) {
  response.json("you are looking at my root route, how roude");
});

//starts our server
app.listen(8080, function () {
  console.log("app listening on port 8080!!!");
});

const mongoose = require("mongoose");
const Poll = mongoose.model("polls");

module.exports = (app) => {
  app.get("/api/poll", (req, res) => {
    res.redirect("/");
  });

  app.get("/", (req, res) => {
    res.send({ data: "sfsdfsdf" });
  });

  app.get("/api/polls", async (req, res) => {
    try {
      const polls = await Poll.find();
      res.status(200).send(polls);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
    //res.send({ data: "sfsdfsdf" });
  });

  app.post("/api/add_poll", async (req, res) => {
    console.log(req.body);

    try {
      const newPoll = new Poll({
        title: req.body.title,
        question: req.body.question,
        answer_1: req.body.answer_1,
        answer_2: req.body.answer_2,
      });
      await newPoll.save();
      res.status(200).send("Added to DB!");
    } catch (err) {
      res.status(400).send(err);
    }
  });
};

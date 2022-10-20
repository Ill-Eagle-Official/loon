const express = require("express");
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("items")
      .then((results) => {
        res.json(results);
      });
  });

  // route to get land-specific items

  router.get("/land", (req, res) => {
    knex
      .select("*")
      .from("items")
      .where("is_land", true)
      .then((results) => {
        res.json(results);
      });
  });

  router.post("/", (req, res) => {
    knex("items")
      .insert({
        name: req.body.name,
        image_url: req.body.image_url,
        video_url: req.body.video_url,
        is_land: req.body.is_land,
        is_sea: req.body.is_sea,
        is_sky: req.body.is_sky,
      })
      .then(() => {
        res.send("success");
      });
  });

  return router;
};

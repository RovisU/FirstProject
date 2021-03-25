const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/contact", (req, res) => {
  res.render("contact.html");
});

router.get("/telecomunicaciones", (req, res) => {
  res.render("telecomunicaciones.html");
});

router.get("/catering", (req, res) => {
  res.render("catering.html");
});

router.get("/licitaciones", (req, res) => {
  res.render("licitaciones.html");
});

router.get("/confeccion", (req, res) => {
  res.render("confeccion.html");
});

router.get("/distribucion", (req, res) => {
  res.render("distribucion.html");
});

module.exports = router;

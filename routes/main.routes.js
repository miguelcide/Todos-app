const express = require("express");
const router = express.Router();

let work = [];
let sports = [];
let movies = [];
let fun = [];

let allMyTodos;

const d = new Date();
let today = d.toLocaleDateString();

router.get("/", (req, res) => {
  res.render("home", {
    work: work,
    sports: sports,
    movies: movies,
    fun: fun,
    worktodos: work.length,
    sportstodos: sports.length,
    moviestodos: movies.length,
    funtodos: fun.length,
    date: today,
    sessionTodos: work.length + sports.length + movies.length + fun.length,
    allMyTodos: allMyTodos,
  });
});

router.post("/", (req, res) => {
  let category = req.body.category;
  let name = req.body.name;

  switch (category) {
    case "Work":
      work.push(name);
      break;
    case "Sports":
      sports.push(name);
      break;
    case "Movies and Series":
      movies.push(name);
      break;
    case "Fun":
      fun.push(name);
      break;
  }

  !allMyTodos ? (allMyTodos = 1) : allMyTodos++;

  res.redirect("/");
});

router.post("/delete", (req, res) => {
  let divId = req.body.divId;
  let category = req.body.category;

  switch (category) {
    case "Work":
      work.splice(divId, 1);
      break;
    case "Sports":
      sports.splice(divId, 1);
      break;
    case "Movies and Series":
      movies.splice(divId, 1);
      break;
    case "Fun":
      fun.splice(divId, 1);
      break;
  }

  allMyTodos--;

  res.redirect("/");
});

module.exports = router;

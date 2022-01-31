"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("./home/index");
  },
  login: (req, res) => {
    res.render("./home/login");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // return res.json(response);
    // const id = req.body.id;
    // const psword = req.body.psword;
    // const users = UserStorage.getUsers("id", "psword");

    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword) {
    //     return res.json({
    //       success: true, // success : ture 라는 객체를 json으로 만들어서 res값으로 넘긴다.
    //     });
    //   }
    // }
    // return res.json({
    //   success: false,
    //   msg: "로그인에 실패했습니다.",
    // });
  },
};

module.exports = {
  output,
  process,
};

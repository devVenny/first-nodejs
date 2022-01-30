"use strict";

const output = {
  home: (req, res) => {
    res.render("./home/index");
  },
  login: (req, res) => {
    res.render("./home/login");
  },
};

const users = {
  id: ["이형섭", "구본경", "나예림"],
  psword: ["123", "1234", "12345"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;
    const idx = users.id.indexOf(id);
    if (users.id.includes(id)) {
      if (users.psword[idx] === psword) {
        return res.json({
          success: true, // success : ture 라는 객체를 json으로 만들어서 res값으로 넘긴다.
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패했습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};

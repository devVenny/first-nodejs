"use strict";

class UserStorage {
  static #users = {
    id: ["이형섭", "구본경", "나예림"],
    psword: ["123", "1234", "12345"],
    name: ["꿍디꿍디", "구본좌", "얼렁뚱땅"],
  };

  static getUsers(...fields) {
    // field(id, psword)의 값만 담은 새로운 배열을 만든다 . name 제외.
    const users = this.#users;
    const newUser = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUser;
  }
}

module.exports = UserStorage;

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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;

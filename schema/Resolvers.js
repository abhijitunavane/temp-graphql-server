const { users } = require("../MockData");
const { _ } = require("lodash");

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
    getUser(parent, args) {
      return _.find(users, { id: Number(args.id) });
    },
  },
};

module.exports = { resolvers };

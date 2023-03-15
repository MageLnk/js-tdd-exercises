const fetch = require("node-fetch");

const getRepos = (repoName) => {
  return fetch(repoName)
    .then((data) => data.json())
    .then((response) => {
      return response.map(function (rep) {
        return rep.name;
      });
    });
};

module.exports = getRepos;

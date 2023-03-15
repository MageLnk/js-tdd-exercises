const data = require("./gitHub.mock.json");
const fetch = require("node-fetch");
const getRepos = require("./async-1");

jest.mock("node-fetch");

describe(`Given getRepos function`, () => {
  const url = "https://api.github.com/users/kabaros/repos";

  beforeAll(() => {
    fetch.mockResolvedValue({ json: () => Promise.resolve(data) });
  });

  test("It should get a list of repositories names", () => {
    // Act
    return getRepos(url).then((result) => {
      // Assert
      //expect(result).toContain("js-exercises");
      expect(result).toContain("honesto");
      expect(result).toContain("dom-ajax-repo");
    });
  });

  test("It should throw an error if the user does not exist", () => {
    // Arrange
    const nonExistentUserUrl = "https://api.github.com/users/non-existent-user/repos";
    fetch.mockRejectedValue(new Error("Error 404"));

    // Act
    return getRepos(nonExistentUserUrl).catch((error) => {
      // Assert
      expect(error.message).toBe("Error 404");
    });
  });
});

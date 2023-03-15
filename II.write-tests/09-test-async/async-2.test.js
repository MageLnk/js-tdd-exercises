const getRepos = require("./async-2");
const fetcher = require("./fetcher");
jest.mock("./fetcher");

describe(`Given the getRepos function`, () => {
  test("gets a list of repositories names (with mock)", () => {
    // Arrange
    fetcher.mockResolvedValue([{ name: "js-exercises" }]);
    const url = "https://api.github.com/users/kabaros/repos";
    // Mockear la importación de fetchet, que es la misma que utiliza getRepos para establecer la respuesta

    // Act
    return getRepos(url).then((result) => {
      // Assert
      expect(result).toContain("js-exercises");
    });
  });

  test("It should throw an error if the user does not exist", () => {
    // Arrange
    const nonExistentUserUrl = "https://api.github.com/users/non-existent-user/repos";
    fetcher.mockRejectedValue(new Error("Error 404"));

    // Act
    return getRepos(nonExistentUserUrl).catch((error) => {
      // Assert
      expect(error.message).toBe("Error 404");
    });
  });
});

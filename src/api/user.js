import { getJsonFromCSV } from "../utils/index.js";

export function getUser(req) {
  const { id } = req.params;
  const userData = JSON.parse(getJsonFromCSV("src/data/users.csv"));
  const index = userData.findIndex((user) => user.id === id);

  return userData[index];
}

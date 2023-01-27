import { getJsonFromCSV, addDataToCSV } from "../utils/index.js";

export function getUser(req) {
  const { id } = req.params;
  const { data } = getJsonFromCSV("src/data/users.csv");
  const index = data.findIndex((user) => user.id === id);

  return data[index];
}

export function addUser(req) {
  const reqBody = req.body;
  const { data, headers } = getJsonFromCSV("src/data/users.csv");
  const maxId = data.reduce(
    (a, b) => Math.max(Number(a), Number(b.id)),
    -Infinity
  );
  let csvData = [];

  for (let i in headers) {
    if (i == 0) {
      csvData = [...csvData, "\n" + (maxId + 1)];
    } else {
      csvData = [...csvData, reqBody[headers[i]]];
    }
  }

  const result = addDataToCSV(csvData, "src/data/users.csv");
  return result;
}

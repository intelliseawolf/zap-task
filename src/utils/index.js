import fs from "fs";

export function getJsonFromCSV(filename) {
  let csv = fs.readFileSync(filename);
  let array = csv.toString().split("\r");
  let result = [];
  let headers = array[0].split(",");

  for (let i = 1; i < array.length - 1; i++) {
    let obj = {};
    let strArray = array[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      if (j === 0) {
        obj = {
          ...obj,
          id: strArray[0].replace(/(\r\n|\n|\r)/gm, ""),
        };
        continue;
      }
      obj[headers[j]] = strArray[j];
    }

    result.push(obj);
  }

  let json = JSON.stringify(result);

  return json;
}

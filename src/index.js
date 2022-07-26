const aFunc = require("./a.js");

const arrowFunc = () => {
  console.log("arrowFunc");
};

const asyncFunc = async () => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("🤩ok");
    }, 2000);
  });
  console.log(res);
};

asyncFunc();

aFunc();

module.exports = { arrowFunc };

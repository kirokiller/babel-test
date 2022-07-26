const asyncFunc = async () => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("🤩ok2");
    }, 2000);
  });
  console.log(res);
};

module.exports = asyncFunc;

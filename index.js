const getratio = require("../ratio/index");
const getfact = require("../factorial/index");

const ratioAndFactorial = (x, y, z) => {
  const ratio = getratio(x, y);
  const factorial = getfact(z);

  return { ratio, factorial };
};
module.exports = ratioAndFactorial;

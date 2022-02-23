module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const matrixIndex = bracketsConfig.findIndex(config =>
        config.includes(str[i]));
    if (str[i] === bracketsConfig[matrixIndex][1] 
        && stack[stack.length - 1] === bracketsConfig[matrixIndex][0])
      stack.pop();

    else stack.push(str[i]);
    };
  return stack.length === 0;
}

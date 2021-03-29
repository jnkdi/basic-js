const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    let result = 0;
    if (Array.isArray(arr)) {
      result++;
      for (let i = 0; i < arr.length; i++) {
        let depth = this.calculateDepth(arr[i]);
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }
    return result + maxDepth;
  } 
};
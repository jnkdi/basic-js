const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length();
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('()');
    } else {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.arr.length || position < 1) {
      this.reset();
      throw new Error('Error');
    } else {
      this.arr.splice(position - 1, 1);
    }
    return this;  
  },
  reverseChain() {
    this.arr.reverse();
    return this;  
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.reset(); 
    return result;
  },
  reset() {
    this.arr = [];
  }
};

module.exports = chainMaker;

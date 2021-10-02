import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    value === undefined ? this.result.push('( )') : this.result.push(value);
    return this;
  },
  removeLink(position) {
    position = position - 1;
    if (this.result[position] === undefined) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.result.splice(position,1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.result.forEach((e,i) => {
      i + 1 === this.result.length ? str += `( ${e} )` : str += `( ${e} )~~`;
    })
    this.result = [];
    return str;
  }
};

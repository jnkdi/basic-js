import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let resultStr = '';
  let gapAddition = '';
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.additionSeparator !== undefined) {
          gapAddition += options.addition + options.additionSeparator;
        } else {
          gapAddition += options.addition + '|';
        }
      }
    } else {
      for (let i = 0; i < 1; i++) {
        if (options.additionSeparator !== undefined) {
          gapAddition += options.addition + options.additionSeparator;
        } else {
          gapAddition += options.addition + '|';
        }
      }
    }
  }
  if (options.additionSeparator !== undefined) {
    gapAddition = gapAddition.substring(0, gapAddition.length - options.additionSeparator.length);
  } else {
    gapAddition = gapAddition.substring(0, gapAddition.length - 1);
  }
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.separator !== undefined) {
        resultStr += str + gapAddition + options.separator;
      } else {
        resultStr += str + gapAddition + '+';
      }
    }
  } else {
    for (let i = 0; i < 1; i++) {
      if (options.separator !== undefined) {
        resultStr += str + gapAddition + options.separator;
      } else {
        resultStr += str + gapAddition + '+';
      }
    }
  }
  if (options.separator !== undefined) {
    resultStr = resultStr.substring(0, resultStr.length - options.separator.length);
  } else {
    resultStr = resultStr.substring(0, resultStr.length - 1);
  }
  return resultStr;
}

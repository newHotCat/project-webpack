import _ from 'lodash'
import numRef from './ref.json'
// 现在，我们不再使用静态导入 lodash，而是通过使用动态导入来分离一个 chunk：

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '')
}

export function wordToNum (word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
};
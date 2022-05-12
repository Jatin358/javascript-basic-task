/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
     // Write your code here
     let size = n;
     let space = n - 1;
     let str = "";
     for (let i = 0; i < size; i++) {
          for (let j = 0; j <= space; j++) {
               str += ' ';
          }
          for (let k = 0; k <= i; k++) {
               str += '*';
               str += ' ';
          }
          str+= ' \n';
          space--;
     }
     console.log(str);
     return str;
};

buildPyramid(10);
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *  
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

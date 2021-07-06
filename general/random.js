// 1. [n, m]的随机数. 
// 思路：比如[0,4]就是取[0，5)，然后舍去
const randomIndex = n + Math.floor(Math.random() * (m - n + 1));
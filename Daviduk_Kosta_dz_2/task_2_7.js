/*Сравнить null и 0. Объяснить результат.
https://habr.com/ru/company/ruvds/blog/337732/
*/


console.log(null == 0); // false -> по умолчанию согласно абстрактному алгоритму сравнения для равенств
console.log(null > 0); // false -> null => +0, +0 = 0, (null > 0) => (0 > 0) = false
console.log(null >= 0) // true -> if (null < 0) = false, => (null >= 0) = true
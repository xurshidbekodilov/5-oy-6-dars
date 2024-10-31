// 1. **Ikki massivning kesishmasini toping**: Ikkita massiv berilgan. Ulardagi umumiy elementlardan tashkil topgan yangi massiv yarating.
// function generalElements(arr1,arr2){
//     let resultArr = [];
//     arr1.forEach(element => {
//         if(arr2.includes(element)){
//             resultArr.push(element);
//         }
//     });
//     return resultArr;
// }
// console.log(generalElements([1,2,3,4,5],[2,7,9,1,5]))

// 2. **Massivdagi raqamlarni ko'paytirish**: Massiv elementlarini berilgan koeffitsiyentga ko'paytirib, natija massivini qaytaruvchi funksiya yozing.
// function elementTimesNum(arr, num){
//     let resultArr = arr.map(element => element*num)
//     return resultArr;
// }
// console.log(elementTimesNum([1,2,3,4],3));

// 3. **Massivdagi musbat sonlar yig'indisi**: Massivdan musbat sonlarni tanlab, ularning yig'indisini hisoblang.
// function sumOfPositiveNumbers(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         if(element > 0){
//             sum += element;
//         }   
//     });
//     return sum;
// }
// console.log(sumOfPositiveNumbers([-1,0,5,-5,8,9,-5,-7,-8]))

// 4. **Nolni oxiriga o‘tkazing**: Berilgan massivdagi barcha `0`larni massiv oxiriga ko‘chiring, qolgan tartib o‘zgarmasligi kerak.
// function leaveNum(arr){
//     let nums = 0;
//     let newarr = [];
//     arr.forEach(element => {
//         if(element != 0){
//             newarr.push(element);
//         }
//         else{
//             nums++;
//         }
//     });
//     for(let i=1; i<=nums; i++){
//         newarr.push(0);
//     }
//     return newarr;
// }
// console.log(leaveNum([0,1,2,3,0,4,5,6,0]));

// 5. **Eng ko'p takrorlangan elementni toping**: Massivda eng ko‘p uchraydigan elementni va uning sonini qaytaruvchi funksiya yozing
// function repeatedElement(arr){
//     let max = 1;
//     let maxElement = arr[0];
//     arr.forEach(element => {
//         let count = 0;
//         let newarr = arr.filter((value) => value == element);
//         count = newarr.length;
//         if(count > max){
//             maxElement = element;
//             max = count;
//         }
//     });
//     let result = [maxElement, max];
//     return result;
// }
// console.log(repeatedElement([1,2,3,1,4,4,2,1,0,1,9,1]));

// 6. **Massivni ichma-ich massivlardan tozalang**: Ichma-ich massivlardan iborat massiv berilgan. Uni faqat bir darajali massivga o‘tkazing (Flatten array).
// function flattenArray(arr) {
//     return arr.flat(1);
// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));

// 7. **Ikki massivni birlashtiring**: Ikkita massiv berilgan, ularni birlashtirib, takroriy elementlarni olib tashlang.
// function mergeArr(arr1, arr2) {
//     return Array.from(new Set([...arr1, ...arr2]));
// }

// console.log(mergeArr([1, 2, 3], [3, 4, 5]));

// 8. **Massiv elementlarini toq/juft qilib ajrating**: Massivdagi toq va juft elementlarni alohida massivlarga ajratib qaytaring
// function separateOddEven(arr) {
//     let oddNumbers = [];
//     let evenNumbers = [];
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             evenNumbers.push(element);
//         } else {
//             oddNumbers.push(element);
//         }
//     });
//    let result = [oddNumbers, evenNumbers];
//    return result;
// }
// console.log(separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9])); 

// 9. **Massivda ma'lum qiymat borligini tekshirish**: Massiv va qiymat berilgan. Funksiya massiv ichida qiymat mavjud bo‘lsa `true`, aks holda `false` qaytarsin
// function checking(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checking([1, 2, 'a', null, false, 5], 'o'))

// 10. **Massivdagi eng katta va eng kichik elementni toping**: Massivdagi eng katta va eng kichik elementlarni qaytaruvchi funksiya yozing
// function findMinMax(array){
//     let max = array[0];
//     let min = array[0];
//     array.forEach(element => {
//         if(element>max){
//             max = element;
//         }
//         else if(element<min){
//             min = element;
//         }
//     });
//     let result = [max,min];
//     return result;
// }
// console.log(findMinMax([1,5,7,9,6,4,32,5,52,58,1,8,23,18,1,0,54,4,1,-4,5,5]))

// 11. **Obyektni tartiblang**: Obyekt ichidagi kalitlari bo‘yicha tartiblangan yangi obyekt hosil qiling
// function sortObject(obj) {
//     let sortedKeys = Object.keys(obj).sort();
//     let sortedObj = sortedKeys.reduce((acc, key) => {
//         acc[key] = obj[key];
//         return acc;
//     }, {});
//     return sortedObj;
// }
// const unsortedObject = {
//     z: 1,
//     e: 3,
//     q: 2,
//     j: 4
// };
// console.log(sortObject(unsortedObject));

// 12. **Obyekt kalitlarini va qiymatlarini alohida massivga o‘tkazing**: Obyektdagi barcha kalitlar va qiymatlar alohida-alohida massivda qaytarilsin
// function separateObjectKeyValue(obj){
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);
//     let result = [ keys, values];
//     return result;
// }
// console.log(separateObjectKeyValue(unsortedObject = {z: 1, e: 3, q: 2, j: 4}));

// 13. **Obyekt birlashtirish**: Ikkita obyekt berilgan. Ularni birlashtirib, umumiy kalitlarni yangilash orqali natijaviy obyekt yarating.
// function mergeObjects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2); // Birinchi obyektni ikkinchisi bilan yangilash
// }
// let object1 = { a: 1, b: 2, c: 3 };
// let object2 = { b: 3, c: 4, d: 5 };
// let mergedObject = mergeObjects(object1, object2);
// console.log(mergedObject);}

// 14. **Qiymatlarni hisoblash**: Berilgan obyekt qiymatlarining umumiy yig‘indisini hisoblang (qiymatlar sonlar bo'lishi kerak)
// function sumObjectValues(obj) {
//     let values = Object.values(obj);
//     let sum = values.reduce((acc, value) => acc + value, 0);
//     return sum;
// }
// let Object = {a: 10, b: 20, c: 30, d: 40};
// console.log(sumObjectValues(Object));

//15. **Kalitni qayta nomlash**: Obyekt ichidagi bir kalit nomini yangi nomga o'zgartiring va qaytaring
// function renameObjectKey(obj, oldKey, newKey) {
//     let newObj = {};
//     for (let [key, value] of Object.entries(obj)) {
//         if (key === oldKey) {
//             newObj[newKey] = value;
//         } else {
//             newObj[key] = value;
//         }
//     }
//     return newObj;
// }
// let sampleObject = {
//     name: 'Ali',
//     age: 30,
//     city: 'Tashkent'
// };
// console.log(renameObjectKey(sampleObject, 'city', 'location'));

// 16. **Kalitni olib tashlash**: Berilgan obyekt va kalit orqali kalitni olib tashlab, yangi obyekt qaytaring.
// function removeKey(obj, key) {
//     let newObj = { ...obj };
//         delete newObj[key];
//     return newObj;
// }
// let person = { name: "John", age: 30, city: "New York" };
// let updatedPerson = removeKey(person, "age");
// console.log(updatedPerson);

// 17. **Bir xil kalitli obyektlarni birlashtirish**: Berilgan massiv ichidagi obyektlarni bir xil kalit bo‘yicha guruhlab, yangi obyekt yarating.
// function groupByKey(array, key) {
//     return array.reduce((result, currentObject) => {
//         let keyValue = currentObject[key];
//         if (!result[keyValue]) {
//             result[keyValue] = [];
//         }
//         result[keyValue].push(currentObject);
//         return result;
//     }, {});
// }
// let data = [
//     { id: 1, name: "Alice", group: "A" },
//     { id: 2, name: "Bob", group: "B" },
//     { id: 3, name: "Charlie", group: "A" },
//     { id: 4, name: "David", group: "B" },
//     { id: 5, name: "Eve", group: "C" }
// ];
// let groupedData = groupByKey(data, "group");
// console.log(groupedData);

// 18. **Obyekt ichida massivlarni yig'ish**: Obyekt ichidagi barcha massivlarni bitta massivga yig‘ing va natijani qaytaring.
// function collectArrays(obj) {
//     return Object.values(obj).reduce((result, value) => {
//         if (Array.isArray(value)) {
//             result = result.concat(value);
//         }
//         return result;
//     }, []);
// }

// 19. **O‘xshash obyektlarni chiqarish**: Berilgan ikkita massiv ichidagi obyektlarning umumiy qismlarini toping.
// function findCommonObjects(arr1, arr2) {
//     return arr1.filter(obj1 => arr2.some(obj2 => 
//         JSON.stringify(obj1) === JSON.stringify(obj2)
//     ));
// }

// 20. **Obyektning chuqurligini aniqlash**: Obyekt ichma-ich obyektlardan tashkil topgan bo‘lsa,
//  uning chuqurligini (depth) topadigan funksiya yozing.
// function getObjectDepth(obj) {
//     if (typeof obj !== "object" || obj === null) {
//         return 0;
//     }
//         let depth = 0;
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             depth = Math.max(depth, getObjectDepth(obj[key]));
//         }
//     }
//         return depth + 1;
// }

// 22. **So‘zlarni tersga o‘girish**: Berilgan jumladagi so‘zlarni teskari tartibda joylashtiruvchi funksiya yozing.
// function reverseWords(string) {
//     return string.split(" ").reverse().join(" ");
// }
// console.log(reverseWords("Hello World"));

// 23. **Eng uzun so‘zni toping**: Berilgan jumladagi eng uzun so‘zni topib, uni qaytaruvchi funksiya yozing.
// function findLongestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("Helloo World"));

// 24. **Bir harfni ko‘paytirish**: Berilgan string ichidagi ma’lum bir harfni ko‘paytirish kerak
//  (masalan, har bir `a` harfidan keyin qo‘shimcha `a` qo‘shing).
// function duplicateChar(str, char) {
//     return str.split(char).join(char + char);
// }
// console.log(duplicateChar("banana", "a"));

// 25. **Stringdan raqamlarni olib tashlash**: Berilgan string ichidan barcha raqamlarni olib tashlab, qolgan qismni qaytaring.
// function removeDigits(str) {
//     let result = ""; 
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char < '0' || char > '9') {
//             result += char;
//         }
//     }
//     return result;
// }
// console.log(removeDigits("Hello123 World!"));
// some sinario based qustion in array and object in js in bangla
//1. ডুপ্লিকেট অপসারণ:
const removeDuplicates = (arr) => [...new Set(arr)];

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]
// ব্যাখ্যা: এখানে Set ব্যবহার করে ডুপ্লিকেট সরিয়ে ইউনিক মানগুলো রাখা হয়েছে এবং ... স্প্রেড অপারেটর ব্যবহার করে সেটিকে আবার অ্যারেতে রূপান্তর করা হয়েছে।

// ম্যাক্স এবং মিন খুঁজুন:
const findMaxMin = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
};

const numbers = [45, 12, 78, 4, 89, 23];
console.log(findMaxMin(numbers));
// Output: { max: 89, min: 4 }
// ব্যাখ্যা: Math.max() এবং Math.min() ফাংশন ব্যবহার করে সর্বোচ্চ এবং সর্বনিম্ন মান খুঁজে বের করা হয়েছে।

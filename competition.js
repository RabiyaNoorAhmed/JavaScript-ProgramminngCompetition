//Question 1:
function maxProduct(nums) {
    let maxProduct = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < 0) {
        let temp = currMax;
        currMax = currMin;
        currMin = temp;
      }
      currMax = Math.max(nums[i], currMax * nums[i]);
      currMin = Math.min(nums[i], currMin * nums[i]);
      maxProduct = Math.max(maxProduct, currMax);
    }
  
    return maxProduct;
  }
  
  const num = parseInt(prompt("Enter numbers to find Product:"));
  const Result = maxProduct([2, 4, 5, 7, -2, 0, -4, 0, -3]);
  const userResult = maxProduct([num]);
  alert("Question 2 Ans is: " + userResult);

// Question 2:
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }

    return [];
}

const result = twoSum(nums, target);
alert("Question 2 Ans is: " + result);



//Question # 03:
const str = "Welcome to this Javascript Guide!";
const words = str.split(" ");
const reversedWords = words.map(word => word.split("").reverse().join(""));
const reversedString = reversedWords.join(" ");
alert("Question 3 Ans is: ," + reversedString);


// Question 4:
const books = [
    {
        author: "Umera Ahmed",
        title: "Pir e Kamil",
        readingStatus: true
    },
    {
        author: "Nemrah Ahmed",
        title: "Namal",
        readingStatus: false
    },
    {
        author: "Jane Austen",
        title: "Pride and Prejudice",
        readingStatus: true
    },
    {
        author: "Hashim Nadeem",
        title: "Prizaad",
        readingStatus: false
    }
];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const { title, author, readingStatus } = book;

    alert(`Book: ${title}\nAuthor: ${author}\nReading Status: ${readingStatus ? "Read" : "UnRead"}`);
}


// Question 5:
function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

const amount = parseInt(prompt("Enter the amount:"));
const coins = amountToCoins(amount, [50, 10, 5, 2, 1]);
alert("Answer of Question 5 is:" + coins);
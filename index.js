// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
//定义一个能够把每个单词首字母变为大写的函数titleCase
function titleCase(str) {
    let arr1,arr2 = []; 
    arr1 = str . split(" ");
    for(let i = 0 ; i < arr1 . length ; i++){
      arr2 . push(arr1[i][0] . toUpperCase()+arr1[i] . substring(1));
    }
  //合并arr2中的单词，每个单词中间加空格
    return arr2.join(" ");
}

console.log(titleCase(sentence));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1));

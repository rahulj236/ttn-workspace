var str = prompt("enter a string");
function palindrome(str){
    var len = str.length;
    var rev=str.split('').reverse().join('');
    return rev == str;
}
alert(palindrome(str));


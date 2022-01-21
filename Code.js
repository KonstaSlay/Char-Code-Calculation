/*Char Code Calculation

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              
total2 = 656661
              
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6*/



function calc(x){
  var str = "";
  for (var i = 0; i < x.length; i++) {
    str += String(x.charCodeAt(i));
  }

  var sum1 = 0;
  for (var i = 0; i < str.length; i++) {
    sum1 += Number.parseInt(str[i]);
  }

  var sum2 = 0;
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '7') {
    arr[i] = 1;
    } else {
      arr.push(Number.parseInt(str[i]));
    }
  }
  for (var i = 0; i < arr.length; i++) {
    sum2 += arr[i];
  }
  var result = sum1 - sum2;
  return result
}
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));

/*ifkhchlhfd'), 6); 
    assert.strictEqual(calc('aaaaaddddr'), 30); 
    assert.strictEqual(calc('jfmgklf8hglbe'), 6);  
    assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);*/
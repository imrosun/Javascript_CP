/* Have the function MatchingCharacters(str) take the str parameter being passed
 and determine the largest number of unique characters that exists between a pair
 of matching letters anywhere in the string. For example: if str is "ahyjakh" 
 then there are only two pairs of matching letters, the two a's and the two h's. 
 Between the pair of a's there are 3 unique characters: h, y, and j. 
 Between the h's there are 4 unique characters: y, j, a, and k. So for this 
 example your program should return 4. */
/* Another example: if str is "ghececgkaem" then your program should return 5 
 because the most unique characters exists within the farthest pair of e 
 characters. The input string may not contain any character pairs, and in that 
 case your program should just return 0. The input will only consist of 
 lowercase alphabetic characters. */


 (function MatchingCharacters(str) { 
    var count  = 0
    for(var i = 0; i < str.length; i++){
      var charObj = {}
      var lastIdx = str.lastIndexOf(str[i])
      if(i == lastIdx) continue
      for(var j = i+1; j < lastIdx; j++){
        if(charObj[str[j]] == undefined) charObj[str[j]] = str[j]
      }
      if(count < Object.keys(charObj).length) count = Object.keys(charObj).length
    }
    console.log(count)
})('busibud') //3
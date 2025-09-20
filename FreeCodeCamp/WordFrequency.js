/*

Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.

*/




function getWords(paragraph) {

    const arr=paragraph.toLowerCase().split(" ")
    const counts={}
 // count each word
  for (let word of arr) {
    counts[word] = (counts[word] || 0) + 1;
  }
    
  const duplicate={}
  for (let word in counts) {
    if(counts[word]>1){
        duplicate[word]=counts[word]
    }
}
return duplicate[value]
}

 



const str="Coding in Python is fun because coding Python allows for coding in Python easily while coding"

const value=getWords(str)

console.log(value);

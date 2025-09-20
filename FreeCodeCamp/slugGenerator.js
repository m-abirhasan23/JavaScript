function generateSlug(str) {

const newStr=str.toLowerCase()

const newStr2=newStr.replace(/[^a-zA-Z0-9\s+]/g, "");

const newStr3=newStr2.trim().replace(/[\s+]/g,"%20").join("")

console.log(newStr3);


}


generateSlug("  Hello, World! 123 ??!!")




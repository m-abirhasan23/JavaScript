function capitalize(paragraph) {

 
    let result= paragraph.trim()

    result = result.replace(/(^\s*\w)|([.?!]+[\s]*\w)/g, (match) => {
    return match.toUpperCase();
  });

  return result

}

console.log(capitalize("this is a simple sentence. i am abir hasan !!"));

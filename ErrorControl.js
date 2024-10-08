/* "use strict"

try {
    let x = 10;
    throw "my error"
} catch (error) {
   console.log(error)
    
}finally{
    console.log("finish error revision")
}
console.log("go on");  */
'use strict'

let result = "c";

try {
    // x = 10;
    if (isNaN(result)) throw "no at number"
    else if (result === '') throw "It is a empty str"
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);

}finally{
    console.log("finish error revision")
}
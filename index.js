import { type } from "os";

// Add your functions here
function map(sourceArray,fn){
    const array = []
    sourceArray.forEach(e=> array.push( fn(e) )  )
    return array
}


function reduce(sourceArray, fn, startingPoint = 0){
    let result = startingPoint
    if((!sourceArray.includes(true) && !sourceArray.includes(false))){
        sourceArray.forEach(e =>   result = fn(e,result)  )

    }else {
        sourceArray.forEach(e =>   result = fn(e,true)  )

    }
    return result 
   

}



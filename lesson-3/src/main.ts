let stringArr = ['one', 'two', 'three']
let userName = ['dave', 1986, true]
let mixedData = ['EVH', 1984, true]

stringArr[0] = 'john';
console.log(stringArr.length)
stringArr.push('hey');
console.log(stringArr)

userName[0] = 1984;
console.log(userName)
userName.unshift('jim')
console.log(userName)

let test = [];
let brands: string[] = []
brands.push('next');
console.log(brands)

// Tuple
let myTuple: [string, number, boolean] = ['dave', 42, true]

let mixed = ['john', 1, false]
mixed = myTuple
console.log(mixed)
myTuple[1] = 41

// object
let myObj: object;
myObj = []
console.log(typeof myObj)

myObj = brands;
console.log(myObj)
myObj = {};
console.log(myObj)

const exampleObj = {
    prop1: 'dave',
    prop2: true,
}

exampleObj.prop1 = 'john';


console.log(exampleObj)



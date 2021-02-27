let object = {
    name :"Jayamma",
    value : 200
};
let subObject = {name : "Rayanam"};

let merge = {...object,...subObject};

console.log(merge["name"]);
console.log(merge["value"]);

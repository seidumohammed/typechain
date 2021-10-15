const name = "Mohammed",
  age = 27,
  gender = "Male";

const talkHi = (name:string, age:number, gender?:string):string  =>{
  return(`Hello ${name}, you are ${age} old and you're ${gender}`);
};

console.log(talkHi("Saeed",28,"Male"))

export {};
function getSum(num1:number, num2:number):number {
  return num1 + num2;
}

// console.log(getSum(1,4));

let mySum = function(num1:any, num2:any){
  if (typeof num1 == 'string'){
    num1 = parseInt(num1);
  }
  if (typeof num2 == 'string'){
    num1 = parseInt(num2);
  }
  return num1 + num2;
}

// console.log(mySum('3',5));

function getName(firstName: string, lastName?: string): string{
  if (!lastName) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

console.log(getName('John', 'Doe'));

type AddFunc = (x: number, y: number) => number;

const add: AddFunc = (x: number, y: number) => x + y;

const add2 = ({ a, b }: { a: number, b: number }) => a + b;


// unions

let maybeNumber: number | string = 5;
maybeNumber = 'hello!';

interface Dog {
  bark: string
}

interface Cat {
  purr: string
}

type CatDog = Dog & Cat | number | string;

let catDog: CatDog = {
  bark: 'bark!',
  purr: 'purrrr!',
}

catDog = '3';

if (typeof catDog === 'string') {
  console.log('Catdog, you are a string.');
}

// casting

add(catDog as any, catDog as any);

// any 

const doesAnything = (x: any) => {
  console.log(x);
}

doesAnything(() => 43.6);

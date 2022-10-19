// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = ["Greg"];

let isStudent: boolean;

isStudent = true;

// tuple, enum, any, null, undefined

// More complex types

let hobbies: string[];
let hobbies2: Array<string>;

hobbies = ["Motorcycling", "Gaming"];

let testPerson: {
  name: string;
  age: number;
};

let testPersonArray: {
  name: string;
  age: number;
}[];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Greg",
  age: 28,
};

// person = {
//   isEmployee: true
// };

let people: Person[];
let people2: Array<Person>;

// Type inference - use it when possible, instead of stating types with d declaration
// Union types - one type or another |

let course: string | number = "React - The Complete Guide";
let course2: string = "this is a string";

course = 12341;

// Functions & types

function addNumbers(a: number, b: string) {
  return a + b; // return type is inferred here, from the parameters
}

const addition = (a: number, b: number) => a + b;

// Functions that have no return statement are of type void
function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

//updatedArray[0].split(""); - we get an error right away, not only in runtime

class Student {
  //firstName: string;
  //lastName: string;
  //age: number;
  //private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enroll("React");
// student.listCourses(); => Angular, React

// student.courses => Angular, React

// interface vs type - both can be used to describe object types, but interfaces can be implemented by classes
interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hello!!!!");
  }
}

/*--------------------------------------------------------------*/
//!!! classes extend classes, but cannot be implemented by classes !!!

class A {
  // Long way of doing it
  /*testString: string;
  testNumber: number;

  constructor(str: string, num: number) {
    this.testString = str;
    this.testNumber = num;
  }*/

  getColor() {
    return this.color;
  }

  setColor(newColor: string) {
    this.color = newColor;
  }

  // TS shorthand
  constructor(public str: string, public num: number, private color = "red") {}
}

const testClassA = new A("A", 2);
console.log(testClassA);
testClassA.setColor("blue");

//------------------------------------------------

class B extends A {
  constructor(public str: string, public num: number, public bool: boolean) {
    super(str, num);
  }
}

const testClassB = new B("B", 3, true);
console.log(testClassB);

/*--------------------------------------------------------------*/
// !!! interfaces extend interfaces, and can be implemented by classes !!!

interface IHero {
  id: number;
  name: string;
  photo?: string;
}

interface IHuman extends IHero {
  sex: string;
  age: number;
  health: number;
}

// interface implemented by class

class C implements IHero {
  /*id: number;
  name: string;
  attributes: string[];

  constructor(id: number, name: string, attributes: string[]) {
    this.id = id;
    this.name = name;
    this.attributes = attributes;
  }*/

  constructor(
    public id: number,
    public name: string,
    public attributes: string[]
  ) {}
}

// interface implemented by class that extends another interface

class D implements IHuman {
  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public age: number,
    public health: number,
    public attributes: string[],
    public photo?: string
  ) {}
}

//const testClassD = new D();

/*--------------------------------------------------------------*/
// class extending class implementing interface

class F {
  constructor(
    public name: string,
    public age: number,
    public isHuman: boolean
  ) {
    this.name.concat(" the first");
  }
}

interface ITest {
  hobbies: string[];
  isAlive: boolean;
}

class E extends F implements ITest {
  constructor(
    public name: string,
    public age: number,
    public isHuman: boolean,
    public isNice: boolean,
    public hobbies: string[],
    public isAlive: boolean
  ) {
    super(name, age, isHuman);
  }
}

const testClassE = new E("jane doe", 29, true, true, ["cycling", "joga"], true);

console.log(testClassE);

/*-------------------------------------------------*/
class G {
  public name: string;
  age: number;

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const testClassG = new G();
console.log(testClassG);

testClassG.name = "h";
testClassG.greet();
console.log(testClassG);

import wizlist from "students.js"

class Person{
   constructor(name, lName, age, adult) {
       this.name = name;
       this.lastName = lName;
       this.age = 5;
       this.bool = bool;

   }

   introduce(){
       return "Hi, I am" + this.name + " " + this.lName
   }
   static greet(person){
       return "Hi " + person.name + " good to see you" 
   }
}

/*class Wizard extends Person {
   constructor(Person, level, bless, curse){
      super (Person);
      this.level = level;
      this.bless = bless;
      this.curse = curse;
   }
   blessmet(){
      return "Expecto Patronum!" + this.bless;
   }
   cursemet(){
      return "Avada Kedavra!" + this.curse;
   }
}

class Student extends Wizard {
   constructor(Wizard, house, credits){
      super(Wizard);
      this.house = "string";
      this.credits = 5;
   }
}*/



class Wizard extends Person{
   constructor(firstName, lastName, age, adult, level){
    super(firstName, lastName, age, adult);
       this.level = level
       
       
   }
   bless(){
       return "Expecto Patronum"
   }
   curse(){
       return "Avada Kedavra"
   }
}
class Student extends Wizard{
   constructor(firstName, lastName, age, adult, level, house,credit){
       super(firstName, lastName, age, adult, level)
       this.house = house
       this.credit = credit
   }

}
let arr = wizlist.map((x) => Object.values(x))
let stud = arr.map((x) => new Student(...x))
let count = 0;
const getAverage = (arr)=>{for(let i = 0; i <arr.length; ++i){
   count+= arr[i].credit;
}return Math.round(count/arr.length)}
const hogwarts = getAverage(stud)
let grifsquad = []
let slythsquad = []
let huffsquad = []
let ravesquad = []
for(let i = 0; i <stud.length; ++i)
{
   if(stud[i].house == "Griffindor" )
   {grifsquad.push(stud[i].credit)}

   if(stud[i].house == "Slytherin" )
   {slythsquad.push(stud[i].credit)}

   if(stud[i].house == "Hufflepuff" )
   {huffsquad.push(stud[i].credit)}

   if(stud[i].house == "Ravenclaw" )
   {ravesquad.push(stud[i].credit)}

}
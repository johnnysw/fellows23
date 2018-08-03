let a = 10;

class Person{
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    showname(){
      console.log(this.name);
    }
  }
  let person1 = new Person("lisi","18");
  person1.showname();

  class Student extends Person{
    constructor(name,age){
      super(name,age)
    }
    work(){
      console.log("working");
      
    }
  }
  let person2 = new Student("zhangsan","30");
  person2.showname();
  person2.work();
class Animal{
    constructor(name,color, age, gender){
      this.name = name,
      this.color=color,
      this.age=age,
      this.gender= gender
    }
    
}
 const cat=new Animal("cat", "white", "2025-3-4","male");
 const dog=new Animal("dog", "blue", "2024-1-23","female");
 const donkey=new Animal("donkey", "green", "2020-11-2","female");
 const monkey=new Animal("monkey", "pink", "2010-1-23","male");
 class Food{
    constructor(name, price, taste,color){
        this.name=name,
        this.price=price,
        this.taste=taste,
         this.color=color
    }
 }
 const rice=new Food("rice","180AF","delecoiuce","white");
 const bread=new Food("bread","10AF","delecoiuce","cream");
 const noodle=new Food("noodle","100AF","delecoiuce","white");
 const drink=new Food("soda","50AF","delecoiuce","white");



 class User{
  name;
  email;
  age;
  constructor(name, email, age){
    this.name=name,
    this.email=email,
    this.age=age
  }
  addFreind(){
    return this.name + "added a new friend"
  }
  post(){
    return this.name +"posted a new post"
  }
 }
  const user1=new User("Zahra","zahra@gmail.com, 32");
  const user2=new User("Hamid","Hamid@gmail.com, 22");
  const user3=new User("Ahmad","ahmad@gmail.com, 12");
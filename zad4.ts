class Pet {
    name: string = "Some pet";
    age: number = 1;
  
    speak(): string {
      return "No speak. I am fish!";
    }
  }
  
  class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
  
    speak(): string {
      return "Yaw--Gaw!";
    }
  }
  
  class Cat extends Pet {
    name = "Barsik";
    age = 2;
  
    speak(): string {
      return "Miyau!";
    }
  }
  

function logPetInfo<T extends Pet>(pet: T): void {
  const petType = pet instanceof Dog ? 'Dog' : pet instanceof Cat ? 'Cat' : 'Pet';

  console.log(petType);
  console.log(`Name: ${pet.name}`);
  console.log(`Age: ${pet.age}`);
  console.log(`Speak: ${pet.speak()}`);
  console.log("");
}
  

  const myDog = new Dog();
  const myCat = new Cat();
  
  logPetInfo(myDog);
  logPetInfo(myCat);

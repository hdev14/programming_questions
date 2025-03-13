import assert from "node:assert";
import test from "node:test";

/**
 * Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
 * out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like. Create the data structures to
 * maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat.
 */

class Animal {
  public order: number;
  constructor(
    readonly name: string,
  ) { }

  isOtherThan(animal: Animal) {
    return this.order > animal.order;
  }
}

class Dog extends Animal { }

class Cat extends Animal { }


class Shelter {
  #dogs: Dog[] = [];
  #cats: Cat[] = [];
  #order = 0;

  enqueue(animal: Animal) {
    animal.order = this.#order;
    this.#order++;

    if (animal instanceof Dog) {
      this.#dogs.push(animal);
    }

    if (animal instanceof Cat) {
      this.#cats.push(animal);
    }
  }

  dequeueAny() {
    if (this.#cats.length === 0) {
      return this.dequeueDog();
    }

    if (this.#dogs.length === 0) {
      return this.dequeueCat();
    }

    const cat = this.#cats[this.#cats.length - 1];
    const dog = this.#dogs[this.#dogs.length - 1];

    if (cat.isOtherThan(dog)) {
      return this.dequeueCat();
    }

    return this.dequeueDog;
  }

  dequeueDog() {
    return this.#dogs.pop();
  }

  dequeueCat() {
    return this.#cats.pop();
  }
}


test("animal shelter", () => {
  const shelter = new Shelter();
  const cat1 = new Cat('kitty');
  const dog1 = new Dog('little black');
  const dog2 = new Dog('mylon');
  const cat2 = new Cat('stripped');

  shelter.enqueue(cat1);
  shelter.enqueue(dog1);
  shelter.enqueue(dog2);
  shelter.enqueue(cat2);

  assert.equal(shelter.dequeueDog(), dog2);
  assert.equal(shelter.dequeueAny(), cat2);
  assert.equal(shelter.dequeueCat(), cat1);
  assert.equal(shelter.dequeueAny(), dog1);
});
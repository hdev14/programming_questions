export default class Stack {
  #stack_capacity;
  #size = 0
  #values: any[];

  constructor(capacity: number) {
    this.#stack_capacity = capacity;
    this.#values = new Array(this.#stack_capacity);
  }

  isEmpty() {
    return this.#size === 0;
  }

  isFull() {
    return this.#size >= this.#stack_capacity;
  }

  getLastElementIdx() {
    return this.#stack_capacity + this.#size - 1;
  }

  push(value: number) {
    if (this.isFull()) {
      throw new Error();
    }

    const idx = this.getLastElementIdx() + 1;
    this.#values[idx] = value;
    this.#size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error();
    }

    const idx = this.getLastElementIdx();
    const value = this.#values[idx];
    this.#values[idx] = undefined;
    this.#size--;
    return value;
  }

  peek() {
    return this.#values[this.getLastElementIdx()];
  }
}
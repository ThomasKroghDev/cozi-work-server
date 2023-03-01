export abstract class Dto<T> {
  constructor(args: Partial<T>) {
    if (args) {
      Object.assign(this, args);
    }
  }
}

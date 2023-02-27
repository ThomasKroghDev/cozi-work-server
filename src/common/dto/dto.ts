export abstract class Dto<T> {
  constructor(args: T) {
    Object.assign(this, args);
  }
}

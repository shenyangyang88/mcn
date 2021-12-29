export default class Validator {
  static email(value) {
    return /\S+@\S+\.\S+/.test(value);
  }
}

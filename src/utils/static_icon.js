export default class StaticIcon {
  static get(path) {
    return require(`../assets/images/${path}`);
  }
}

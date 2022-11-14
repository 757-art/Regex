export default class Validator {
  validateUsername(name) {
    return name.match(/[\w0-9_-][^(0-9){0,3}]^[^0-9_-][^0-9_-]$/);
  }
}

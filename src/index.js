export default class Validator {
  validateUsername(name) {
    let regexp = /^[a-zA-Z]+[\w_-]*[a-zA-Z]$/gm;
      return name.match(regexp);
  }
}

let user = new Validator();
user.validateUsername("Arag09_rn");

console.log()


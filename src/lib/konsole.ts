export class konsole {
  static black(message: string) {
    console.log(`\x1b[30m${message}\x1b[0m`);
  }

  static red(message: string) {
    console.log(`\x1b[31m${message}\x1b[0m`);
  }

  static green(message: string) {
    console.log(`\x1b[32m${message}\x1b[0m`);
  }

  static yellow(message: string) {
    console.log(`\x1b[33m${message}\x1b[0m`);
  }

  static blue(message: string) {
    console.log(`\x1b[34m${message}\x1b[0m`);
  }

  static magenta(message: string) {
    console.log(`\x1b[35m${message}\x1b[0m`);
  }

  static cyan(message: string) {
    console.log(`\x1b[36m${message}\x1b[0m`);
  }

  static white(message: string) {
    console.log(`\x1b[37m${message}\x1b[0m`);
  }

  static bgBlack(message: string) {
    console.log(`\x1b[40m${message}\x1b[0m`);
  }

  static bgRed(message: string) {
    console.log(`\x1b[41m${message}\x1b[0m`);
  }

  static bgGreen(message: string) {
    console.log(`\x1b[42m${message}\x1b[0m`);
  }

  static bgYellow(message: string) {
    console.log(`\x1b[43m${message}\x1b[0m`);
  }

  static bgBlue(message: string) {
    console.log(`\x1b[44m${message}\x1b[0m`);
  }

  static bgMagenta(message: string) {
    console.log(`\x1b[45m${message}\x1b[0m`);
  }

  static bgCyan(message: string) {
    console.log(`\x1b[46m${message}\x1b[0m`);
  }

  static bgWhite(message: string) {
    console.log(`\x1b[47m${message}\x1b[0m`);
  }
}

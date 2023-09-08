export class RGB {
  red!: number;
  green!: number;
  blue!: number;
  rangeMin: number = 0;
  rangeMax: number = 255;

  toSting() {
    return `${this.red}, ${this.green}, ${this.blue}`;
  }

  constructor(r: number, g: number, b: number) {
    // check red
    try {
      if (r >= this.rangeMin && r <= this.rangeMax) {
        // if in range
        this.red = r;
      }
    } catch (error) {
      throw new Error('red is not in range 0-255 (inclusive)');
    }
    // check green
    try {
      if (g >= this.rangeMin && g <= this.rangeMax) {
        // if in range
        this.green = g;
      }
    } catch (error) {
      throw new Error('green is not in range 0-255 (inclusive)');
    }
    // check green
    try {
      if (b >= this.rangeMin && b <= this.rangeMax) {
        // if in range
        this.blue = b;
      }
    } catch (error) {
      throw new Error('blue is not in range 0-255 (inclusive)');
    }
  }
}

export class CMYK {
  cyan!: number;
  magenta!: number;
  yellow!: number;
  black!: number;
  rangeMin: number = 0;
  rangeMax: number = 100;

  toSting() {
    return `${this.cyan}, ${this.magenta}, ${this.yellow}, ${this.black}`;
  }

  constructor(c: number, m: number, y: number, b: number) {
    // check cyan
    try {
      if (c >= this.rangeMin && c <= this.rangeMax) {
        // in range
        this.cyan = c;
      }
    } catch (error) {
      throw new Error('cyan is not in range 0-100 (inclusive)');
    }
    // check megenta
    try {
      if (m >= this.rangeMin && m <= this.rangeMax) {
        // in range
        this.magenta = m;
      }
    } catch (error) {
      throw new Error('magenta is not in range 0-100 (inclusive)');
    }
    // check yellow
    try {
      if (y >= this.rangeMin && y <= this.rangeMax) {
        // in range
        this.yellow = y;
      }
    } catch (error) {
      throw new Error('yellow is not in range 0-100 (inclusive)');
    }
    // check black
    try {
      if (b >= this.rangeMin && b <= this.rangeMax) {
        // in range
        this.black = b;
      }
    } catch (error) {
      throw new Error('black is not in range 0-100 (inclusive)');
    }
  }
}

export class HEX {
  hex_color!: string;

  // checks if hex code is valid on 6 or 3 lenght values
  Reg_hex = /(^#[0-9A-F]{6}$) | (^#[0-9A-F]{3}$)/i;

  toString() {
    return this.hex_color;
  }

  constructor(name: string) {
    try {
      if (this.Reg_hex.test(name)) {
        this.hex_color = name.toUpperCase();
      }
    } catch (error) {
      throw new Error('Not a hex value 000000 - FFFFFF (inclusive)');
    }
  }
}

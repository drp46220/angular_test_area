export class RGB {
    red!: number;
    green!: number;
    blue!: number;
    rangeMin: number = 0;
    rangeMax: number = 255;

    constructor(r: number, g: number, b: number) {
        // check red
        if (r >= this.rangeMin && r <= this.rangeMax) {     // if in range
            this.red = r;
        } else { //outside range
            if (r < this.rangeMin) { //if smaller
                this.red = 0;
            } else { //else larger
                this.red = 255;
            }
        }
        // check green
        if (g >= this.rangeMin && g <= this.rangeMax) {     // if in range
            this.green = g;
        } else { //outside range
            if (g < this.rangeMin) { //if smaller
                this.green = 0;
            } else { //else larger
                this.green = 255;
            }
        }
        // check blue
        if (b >= this.rangeMin && b <= this.rangeMax) {     // if in range
            this.blue = b;
        } else { //outside range
            if (b < this.rangeMin) { //if smaller
                this.blue = 0;
            } else { //else larger
                this.blue = 255;
            }
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

    constructor(c: number, m: number, y: number, b: number) {
        // check cyan
        if (c >= this.rangeMin && c <= this.rangeMax) { // in range
            this.cyan = c;
        } else { //outside range
            if (c < this.rangeMin) { // if smaller
                this.cyan = 0;
            } else {    // else larger
                this.cyan = 100;
            }
        }
        // check magenta
        if (m >= this.rangeMin && m <= this.rangeMax) { // in range
            this.magenta = m;
        } else { //outside range
            if (m < this.rangeMin) { // if smaller
                this.magenta = 0;
            } else {    // else larger
                this.magenta = 100;
            }
        }
        // check yellow
        if (y >= this.rangeMin && y <= this.rangeMax) { // in range
            this.yellow = y;
        } else { //outside range
            if (y < this.rangeMin) { // if smaller
                this.yellow = 0;
            } else {    // else larger
                this.yellow = 100;
            }
        }
        // check black
        if (b >= this.rangeMin && b <= this.rangeMax) { // in range
            this.black = b;
        } else { //outside range
            if (c < this.rangeMin) { // if smaller
                this.black = 0;
            } else {    // else larger
                this.black = 100;
            }
        }
    }
}

export class HEX {
    hex_color!: string;

    // checks if hex code is valid on 6 or 3 lenght values
    Reg_hex = /(^#[0-9A-F]{6}$) | (^#[0-9A-F]{3}$)/i;

    constructor(name: string) {
        this.isHexColor(name)
    }

    // sets the hex if valid
    isHexColor(hex: string) {
        if (this.Reg_hex.test(hex)) {
            this.hex_color = hex;
        } else {
            this.hex_color = '#FFFFFF';
        }
    }
}




import { Injectable } from '@angular/core';
import { CMYK, HEX, RGB } from '../color-model';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  string_to_rgb(s: string) {
    return new RGB(Number(s.split(","[0])), Number(s.split(",")[1]), Number(s.split(",")[2]))
  }

  string_to_cmyk(s: string) {
    return new CMYK(Number(s.split(","[0])), Number(s.split(",")[1]), Number(s.split(",")[2]), Number(s.split(",")[3]));
  }

  string_to_hex(s: string) {
    return new HEX(s)
  }

  rgb_to_cmyk(color: string) {
    const RGBcolor = this.string_to_rgb(color); // convert rgb string to rgb color type

    const r: number = (RGBcolor.red / 255)
    const g: number = (RGBcolor.green / 255)
    const b: number = (RGBcolor.blue / 255)

    const k: number = +(1 - Math.max(r, g, b)).toFixed(1);
    const c: number = +((1 - r - k) / (1 - k) || 0).toFixed(1);
    const m: number = +((1 - g - k) / (1 - k) || 0).toFixed(1);
    const y: number = +((1 - b - k) / (1 - k) || 0).toFixed(1);

    return new CMYK(c, m, y, k)
  }

  rgb_to_hex(color: string) {
    const RGBcolor = this.string_to_rgb(color);

    const r: number = RGBcolor.red;
    const g: number = RGBcolor.green;
    const b: number = RGBcolor.blue;

    function componentToHex(c: number) { // each component to hex
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r: number, g: number, b: number) { // combine components
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  }

  cmyk_to_rgb() { }

  cmyk_to_hex() { }

  hex_to_rgb(hex: string) {

    function hexToRgb(hex: string) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }

  hex_to_cmyk(color: string) {
    this.hex_to_rgb(this.rgb_to_cmyk(color).toString())
  }

  constructor() { }
}

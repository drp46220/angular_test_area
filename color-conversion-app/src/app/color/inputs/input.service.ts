import { Injectable } from '@angular/core';
import { CMYK, HEX, RGB } from '../color-model';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  // check if the input is 3 positive numbers 0-255 (inclusive)
  rgb_validator =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  cmyk_validator = /^(100|\d{1,2}|0)(?:\s*,\s*(100|\d{1,2}|0)){3}$/;

  hex_validator = /^#([A-Fa-f0-9]{6})$/;

  string_to_rgb(s: string) {
    if (s.match(this.rgb_validator)) {
      return new RGB(
        Number(s.split(',')[0]),
        Number(s.split(',')[1]),
        Number(s.split(',')[2])
      );
    } else {
      alert('An input is not in rgb value -> 0-255 (inclusive)');
      return new RGB(-1, -1, -1);
    }
  }

  string_to_cmyk(s: string) {
    if (s.match(this.cmyk_validator)) {
      return new CMYK(
        Number(s.split(',')[0]),
        Number(s.split(',')[1]),
        Number(s.split(',')[2]),
        Number(s.split(',')[3])
      );
    } else {
      alert('An input is not a cmyk value format -> 0-100 (inclusive)');
      return new CMYK(-1, -1, -1, -1);
    }
  }

  string_to_hex(s: string) {
    if (s.match(this.hex_validator)) {
      return new HEX(s);
    } else {
      alert('An input is not a valid hex format -> #RRGGBB');
      return new HEX('-1');
    }
  }

  rgb_to_cmyk(color: string) {
    const RGBcolor = this.string_to_rgb(color); // convert rgb string to rgb color type

    console.log(
      `rgbToCMYK--before math r:${RGBcolor.red}, g:${RGBcolor.green}, b:${RGBcolor.blue}, Max:${RGBcolor.rangeMax}, Min:${RGBcolor.rangeMin}`
    );

    // these stay global so i probaly shouldnt use this method in the future
    const r: number = 1 - RGBcolor.red / RGBcolor.rangeMax;
    const g: number = 1 - RGBcolor.green / RGBcolor.rangeMax;
    const b: number = 1 - RGBcolor.blue / RGBcolor.rangeMax;

    var black: number;

    console.log(
      `computed C:${r.toFixed(2)}, computed M:${g.toFixed(
        2
      )}, computed Y:${b.toFixed(2)}`
    );

    var minCMY = Math.min(r, Math.min(g, b));
    if (
      RGBcolor.red === 255 ||
      RGBcolor.green === 255 ||
      RGBcolor.blue === 255
    ) {
      black = 1;
    } else {
      black = +minCMY.toFixed(2);
    }

    const k = black;
    const c: number = +((r - minCMY) / (1 - minCMY) || 0).toFixed(2);
    const m: number = +((g - minCMY) / (1 - minCMY) || 0).toFixed(2);
    const y: number = +((b - minCMY) / (1 - minCMY) || 0).toFixed(2);

    return new CMYK(c * 100, m * 100, y * 100, k * 100);
  }

  rgb_to_hex(color: string) {
    const RGBcolor = this.string_to_rgb(color);

    console.log(
      `rgbToHex-- r:${RGBcolor.red}, g:${RGBcolor.green}, b:${RGBcolor.blue}, Max:${RGBcolor.rangeMax}, Min:${RGBcolor.rangeMin}`
    );

    const r: number = RGBcolor.red;
    const g: number = RGBcolor.green;
    const b: number = RGBcolor.blue;

    function componentToHex(c: number) {
      // each component to hex
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }

    function rgbToHex(r: number, g: number, b: number) {
      // combine components
      const h: string =
        '#' +
        componentToHex(r).toString().toUpperCase() +
        componentToHex(g).toString().toUpperCase() +
        componentToHex(b).toString().toUpperCase();
      return h;
    }

    return rgbToHex(r, g, b);
  }

  cmyk_to_rgb(color: string) {
    const CMYKcolor = this.string_to_cmyk(color); // convert cmyk string to cmyk color type

    console.log(
      `cmykToRGB--before math r:${CMYKcolor.cyan}, g:${CMYKcolor.magenta}, b:${CMYKcolor.yellow}, k:${CMYKcolor.black}, Max:${CMYKcolor.rangeMax}, Min:${CMYKcolor.rangeMin}`
    );

    const r1: number =
      255 *
      (1 - CMYKcolor.cyan / CMYKcolor.rangeMax) *
      (1 - CMYKcolor.black / CMYKcolor.rangeMax);
    const g1: number =
      255 *
      (1 - CMYKcolor.magenta / CMYKcolor.rangeMax) *
      (1 - CMYKcolor.black / CMYKcolor.rangeMax);
    const b1: number =
      255 *
      (1 - CMYKcolor.yellow / CMYKcolor.rangeMax) *
      (1 - CMYKcolor.black / CMYKcolor.rangeMax);

    console.log(
      `computed r:${Math.ceil(r1)}, computed g:${Math.ceil(
        g1
      )}, computed r:${Math.ceil(b1)}`
    );

    return new RGB(Math.round(r1), Math.round(g1), Math.round(b1));
  }

  cmyk_to_hex(color: string) {
    return this.rgb_to_hex(this.cmyk_to_rgb(color).toSting());
  }

  hex_to_rgb(hex: string) {
    return new RGB(
      +('0x' + hex[1].toUpperCase() + hex[2].toUpperCase()) | 0,
      +('0x' + hex[3].toUpperCase() + hex[4].toUpperCase()) | 0,
      +('0x' + hex[5].toUpperCase() + hex[6].toUpperCase()) | 0
    );
  }

  hex_to_cmyk(color: string) {
    return this.rgb_to_cmyk(this.hex_to_rgb(color).toSting());
  }

  constructor() {}
}

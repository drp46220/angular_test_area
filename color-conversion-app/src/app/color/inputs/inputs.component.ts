import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CMYK, HEX, RGB } from '../color-model';
import { InputService } from './input.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {

  @ViewChild('color_form', { static: false })
  color_form!: NgForm;

  constructor(private inputService: InputService) { }

  rgb_string!: string;
  cmyk_string!: string;
  hex_string!: string;

  rgb_color!: RGB;
  cmyk_color!: CMYK;
  hex_color!: HEX;

  convert() {
    this.rgb_string = (<HTMLInputElement>document.getElementById("rgbCode")).value
    this.cmyk_string = (<HTMLInputElement>document.getElementById("cmykCode")).value
    this.hex_string = (<HTMLInputElement>document.getElementById("hexCode")).value
    tempCMYK: CMYK;
    tempHEX: HEX;
    tempRGB: RGB;

    if ((<HTMLInputElement>document.getElementById("rgbCode")).value != '') {
      const tempCMYK = this.inputService.rgb_to_cmyk(this.rgb_string);
      const tempHEX = this.inputService.rgb_to_hex(this.rgb_string);
    }


  }

  clear() {
    (<HTMLInputElement>document.getElementById("rgbCode")).value = '';
    (<HTMLInputElement>document.getElementById("cmykCode")).value = '';
    (<HTMLInputElement>document.getElementById("hexCode")).value = '';
  }
}
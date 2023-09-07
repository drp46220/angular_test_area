import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CMYK, HEX, RGB } from '../color-model';
import { InputService } from './input.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  @ViewChild('rgbForm') rgbForm!: NgForm;
  @ViewChild('cmykForm') cmykForm!: NgForm;
  @ViewChild('hexForm') hexForm!: NgForm;

  constructor(private inputService: InputService) {}

  color_string = {
    rgb_string: '',
    cmyk_string: '',
    hex_string: '',
  };

  rgb_color!: RGB;
  cmyk_color!: CMYK;
  hex_color!: HEX;

  submitted: boolean = false;

  convertHEX() {
    this.submitted = true;
    // console.log(
    //   `outside of hex if statement-- ${
    //     this.hexForm.value != '' || this.hexForm.value != null
    //   }`
    // );
    // console.log(
    //   `if this.hexForm.value != '' || this.hexForm.value != null-- ${
    //     this.hexForm.value != '' || this.hexForm.value != null
    //   }`
    // );
    // hex is filled out
    if (this.hexForm.value != '' || this.hexForm.value != null) {
      // console.log(`in hex if statement--${this.hexForm}`);
      // console.log(
      //   `hexElementId = ${
      //     (<HTMLInputElement>document.getElementById('hexCode')).value
      //   }`
      // );
      // to hex
      this.hex_color = this.inputService.string_to_hex(
        (<HTMLInputElement>document.getElementById('hexCode')).value
      );
      this.color_string.hex_string = (<HTMLInputElement>(
        document.getElementById('hexCode')
      )).value.toUpperCase();
      // console.log(`hex_form.value= ${this.hexForm.value}`);
      // console.log(`hex_string= ${this.color_string.hex_string}`);
      // console.log(`hex_color= ${this.hex_color}`);

      // to rgb
      const tempRGB = this.inputService.hex_to_rgb(
        this.color_string.hex_string
      );
      this.color_string.rgb_string = tempRGB.toSting();

      //to cmyk
      this.color_string.cmyk_string = this.inputService
        .hex_to_cmyk(this.color_string.hex_string)
        .toSting();

      (<HTMLInputElement>document.getElementById('rgbCode')).value =
        this.color_string.rgb_string;
      (<HTMLInputElement>document.getElementById('cmykCode')).value =
        this.color_string.cmyk_string;
    }
  }

  convertCMYK() {
    this.submitted = true;
    // console.log(
    //   `outside of cmyk if statement-- ${
    //     this.cmykForm.value != '' || this.cmykForm.value != null
    //   }`
    // );
    // console.log(
    //   `if this.cmykForm.value != '' || this.cmykForm.value != null-- ${
    //     this.cmykForm.value != '' || this.cmykForm.value != null
    //   }`
    // );
    // cnyk is filled out
    if (this.cmykForm.value != '' || this.cmykForm.value != null) {
      // console.log(`in cmyk if statement--${this.cmykForm}`);
      // console.log(
      //   `cmykElementId = ${
      //     (<HTMLInputElement>document.getElementById('cmykCode')).value
      //   }`
      // );
      // to cmyk
      this.cmyk_color = this.inputService.string_to_cmyk(
        (<HTMLInputElement>document.getElementById('cmykCode')).value
      );
      this.color_string.cmyk_string = (<HTMLInputElement>(
        document.getElementById('cmykCode')
      )).value;
      // console.log(`cmyk_form.value= ${this.cmykForm.value}`);
      // console.log(`cmyk_string= ${this.color_string.cmyk_string}`);
      // console.log(`cmyk_color= ${this.cmyk_color.toSting()}`);

      // to rgb
      const tempRGB = this.inputService.cmyk_to_rgb(this.cmyk_color.toSting());
      this.color_string.rgb_string = tempRGB.toSting();

      // to hex
      const tempHEX = this.inputService.cmyk_to_hex(this.cmyk_color.toSting());
      this.color_string.hex_string = tempHEX.toString();

      (<HTMLInputElement>document.getElementById('rgbCode')).value =
        this.color_string.rgb_string;
      (<HTMLInputElement>document.getElementById('hexCode')).value =
        this.color_string.hex_string;
    }
  }

  convertRGB() {
    this.submitted = true;

    // console.log(
    //   `outside of rgb if statement-- ${
    //     this.rgbForm.value != '' || this.rgbForm.value != null
    //   }`
    // );
    // console.log(
    //   `if this.rgbForm.value != '' || this.rgbForm.value != null-- ${
    //     this.rgbForm.value != '' || this.rgbForm.value != null
    //   }`
    // );
    // rgb is filled out
    if (this.rgbForm.value != '' || this.rgbForm.value != null) {
      // console.log(`in rgb if statement--${this.rgbForm}`);
      // to rgb
      this.rgb_color = this.inputService.string_to_rgb(
        (<HTMLInputElement>document.getElementById('rgbCode')).value
      );
      this.color_string.rgb_string = (<HTMLInputElement>(
        document.getElementById('rgbCode')
      )).value;
      // console.log(`rgb_form.value= ${this.rgbForm.value}`);
      // console.log(`rgb_string= ${this.color_string.rgb_string}`);
      // console.log(`rgb_color= ${this.rgb_color.toSting()}`);

      // to cmyk
      const tempCMYK = this.inputService.rgb_to_cmyk(this.rgb_color.toSting());
      this.color_string.cmyk_string = tempCMYK.toSting();

      // to hex
      const tempHEX = this.inputService.rgb_to_hex(this.rgb_color.toSting());
      this.color_string.hex_string = tempHEX.toString();

      (<HTMLInputElement>document.getElementById('cmykCode')).value =
        this.color_string.cmyk_string;
      (<HTMLInputElement>document.getElementById('hexCode')).value =
        this.color_string.hex_string;
    }
  }

  clear() {
    // console.log(`before clear ${this.rgbForm}`);
    // console.log(`before clear ${this.cmykForm}`);
    // console.log(`before clear ${this.hexForm}`);

    this.rgbForm.reset();
    this.cmykForm.reset();
    this.hexForm.reset();
    this.submitted = false;

    this.color_string.rgb_string = '';
    this.color_string.cmyk_string = '';
    this.color_string.hex_string = '';

    // console.log(`after clear ${this.rgbForm}`);
    // console.log(`after clear ${this.cmykForm}`);
    // console.log(`after clear ${this.hexForm}`);
  }
}

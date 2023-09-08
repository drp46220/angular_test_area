# ColorConversionApp

This project is a simple app to convert colors

Test app for my graphic designer girlfriend

# Deployment?

I have yet to learn how to deploy so nothing is tested on that side yet
I hope to get there soon

# Will convert: `RGB <-> CMYK <-> HEX`

`* Fair warning *`
~~Inputs are not checked but it will be obvious if the input is incorrect as the color view wont show anything~~
Inputs are now checked and an alert will popup if inputs are invalid. It's a little glitchy but works.
The CMYK color (K) black will show 'undefined' if invalid

Numbers will be rounded slightly but I do not think this will affect the color by any noticeable amount unless your eyes are super sharp.

- Convert Button:
  The convert button will convert the desired space to the other spaces

- Clear Button:
  The clear button will reset all form inputs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

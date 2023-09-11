import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): unknown {
    return reverse(value);
  }
}

function reverse(inputString: string): string {
  // Split the string into an array of characters, reverse it, and join it back into a string
  const reversedArray = inputString.split('').reverse();
  const reversedString = reversedArray.join('');
  return reversedString;
}

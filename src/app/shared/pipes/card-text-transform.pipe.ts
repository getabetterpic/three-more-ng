import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTextTransform'
})
export class CardTextTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) { return ''; }
    let strToReturn = value.replace(/\\n/g, '<br />');
    strToReturn = strToReturn.replace(/\{\d\}/g, (match) => {
      return `<img class="mtg-symbol" src="assets/${match[1]}.png" alt="${match[1]}" />`;
    });
    strToReturn = strToReturn.replace(/\{(\w.?\w?)\}/g, (match, p1) => {
      p1 = p1.replace('/', '');
      return `<img class="mtg-symbol" src="assets/${p1}.png" alt="tap" />`;
    });
    return strToReturn;
  }

}

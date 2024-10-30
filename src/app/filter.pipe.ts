import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    console.log("pesquisa:", searchTerm);
    console.log("antes da filtragem:", items);
    if (!items || !searchTerm) {
      return items;
    }

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("após a filtragem:", filteredItems);
    return filteredItems;
  }
}

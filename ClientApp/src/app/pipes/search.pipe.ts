import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pokesearch",
})
export class SearchPipe implements PipeTransform {
  transform(items: any, searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((poke) => {
      return poke.name.toLocaleLowerCase().includes(searchText);
    });
  }
}

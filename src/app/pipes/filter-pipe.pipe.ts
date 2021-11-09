import { ProductDetailDto } from './../models/productDetailDto';
import { Product } from 'src/app/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: ProductDetailDto[], filterText: string): ProductDetailDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:ProductDetailDto)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}

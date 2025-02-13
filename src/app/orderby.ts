import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'orderBy' })
export class OrderrByPipe implements PipeTransform {

    transform(socialNetworks: Array<any>, args?: any): any {
        return socialNetworks.sort(function(a, b){
            if(a[args.property] < b[args.property]){
                return -1 * args.direction;
            }
            else if( a[args.property] > b[args.property]){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
        });
    };
};

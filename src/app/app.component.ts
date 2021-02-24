import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

declare var gtag
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  socialNetworks: Array<any>;
  isDesc: boolean = false;
  column: string = 'order';
  constructor() { }

  title = 'Dolce Confeitaria';

  ngOnInit() {
    this.socialNetworks = [
      {
        order: 2,
        name: 'Instagram',
        icon: 'instagram.svg',
        link: 'https://instagram.com/dolce_confeitaria',
        label: 'instagram'
      },
      {
        order: 4,
        name: 'TikTok',
        icon: 'tiktok.svg',
        link: 'https://vm.tiktok.com/ZMeFkuvqA/',
        label: 'tiktok'
      },
      {
        order: 5,
        name: 'Facebook',
        icon: 'facebook.svg',
        link: 'https://www.facebook.com/DolceConfeitariaSP',
        label: 'facebook'
      },
      {
        order: 3,
        name: 'Whatsapp',
        icon: 'whatsapp.svg',
        link: 'https://wa.me/%2B5511987797059?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.',
        label: 'whatsapp'
      },
      {
        order: 1,
        name: 'Cardápio',
        icon: 'cardapio.svg',
        link: 'https://www.flipsnack.com/dolceconfeitaria/dolce-confeitaria.html',
        label: 'cardapio'
      }
    ]
  }

  public open(item) {
    gtag('event', "open_"+item.label, {
      eventCategory: "link",
      eventLabel: item.label,
      eventAction: "click",
      eventValue: 1
    });
    window.location.href=item.link;
  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.socialNetworks.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
  };
}

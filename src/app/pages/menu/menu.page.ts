import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

pages = [
  {
    title: 'Producto',
    url:'/menu/product',
    icon: 'list'
  },
  /*
  {
    title: 'Canasto',
    url:'/menu/basket',
    icon:'basket'
  },
  */
  {
    title: 'Buscar',
    url:'/menu/tabs',
    icon: 'search'
  },
  {
    title: 'Estadisticas',
    url:'/menu/stadistics',
    icon: 'stadistics'
  }
]

selectedPath = '';

  constructor(private router: Router) { 
   console.log("hola mundo");
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event && event.url){
        this.selectedPath = event.url;
        console.log(this.selectedPath);
      }
    })
  }

  ngOnInit() {
  }

}

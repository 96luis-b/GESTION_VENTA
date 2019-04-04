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
    title: 'Product',
    url:'/menu/product'
  },
  {
    title: 'Basket',
    url:'/menu/basket'
  },
  {
    title: 'Dashboard',
    url:'/menu/tabs'
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

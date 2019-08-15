
import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <img src="https://stickeroid.com/uploads/pic/0/stickeroid_me_5bde3c9ab9cb3.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/tool/all" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
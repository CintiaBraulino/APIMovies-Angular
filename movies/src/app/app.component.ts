import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavBar: boolean = false;
  title = 'customer-front';
  private maxfontSize = 15.0;
  private minfontSize = 15.0;

  constructor(private themeService: ThemeService){}

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  getFocus() {
    document.getElementById("menu")?.focus();
  }
  
  incrementFont() {
    this.maxfontSize++;
    document.body.style.fontSize=this.maxfontSize+"px";
  }
  decrementFont() {
    this.minfontSize--;
    document.body.style.fontSize=this.minfontSize+"px";
  }
  fontSize() {
    let body = document.getElementsByTagName('body')[0];
    body.style.fontSize = '15px';
  }

}

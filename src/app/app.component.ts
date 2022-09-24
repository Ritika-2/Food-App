import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router){}

  isLoggedIn:boolean=false;
  title = 'foodappFE';
  logOut(){
    localStorage.removeItem('user');
    localStorage.removeItem("isLoggedIn");
    
    window.alert("You have logged out");
    this.route.navigate(['/home']);
    
  }

  

  checkLogin(){
   return Boolean(localStorage.getItem("isLoggedIn"));
  }
}

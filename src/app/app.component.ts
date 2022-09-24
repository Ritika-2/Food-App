import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean=false;
  title = 'foodappFE';
  logOut(){
    localStorage.removeItem('user');
    localStorage.removeItem("isLoggedIn");
    
    window.alert("You have logged out");
    // this.route.navigate(["/login"])
    
  }

  checkLogin(){
   return Boolean(localStorage.getItem("isLoggedIn"));
  }
}

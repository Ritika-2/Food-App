import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error:any
  title = 'foodappFE';
  logOut(){
    localStorage.removeItem('token');
    
    window.alert("You have logged out");
    // this.route.navigate(["/login"])
    
  }
}

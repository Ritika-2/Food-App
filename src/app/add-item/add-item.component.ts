import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private item:ItemService) { }

  ngOnInit(): void {
  }


 

  addItem(form:NgForm)
  {
    // console.log(form.value);
    // this.item.saveItem(form.value).subscribe((res)=>
    // {
    //   console.log(res);
      
    // })
  }

}

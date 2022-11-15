import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  name: string = "";

  newName: string = "";
  names: string[] = [];

  elementos: string[] = ["elemento 1", "elemento 2", "elemento 3"];

  addName(){
    this.names.push(this.newName)
  }


//  opcion 2  
//  getName(event: Event){
//    const element = event.target as HTMLInputElement
//    this.name = element.value
//  }

}

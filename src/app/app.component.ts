import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Dhiraj Mehta's First Angular App.";
  text : string = "Hello";
  textBox = "Text Here";
  ngifExample : boolean = true;
  dataArray = [
    {
      name: "Dhiraj",
      branch: "IT",
      sem: "7"
    },
    {
      name: "Pallavi",
      branch: "EXTC",
      sem: "3"
    }
  ];
  buttonClick =(e: Event)=>{
    this.text = "Hello Dhiraj";
    this.ngifExample = false;
    console.log(e);  
  }

  onChange(e:Event){
    this.textBox = "Hi Pallavi !!";
  }
}

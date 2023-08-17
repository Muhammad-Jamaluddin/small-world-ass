import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  phaseResults: any[] = [
    { name: "Phase #1 results: ", value: "6" },
    { name: "Phase #2 results: ", value: "19" },
    { name: "Phase #3 results: ", value: "3" }
  ];

  

}

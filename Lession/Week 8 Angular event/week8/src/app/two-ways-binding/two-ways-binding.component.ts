import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-binding',
  templateUrl: './two-ways-binding.component.html',
  styleUrls: ['./two-ways-binding.component.css']
})
export class TwoWaysBindingComponent implements OnInit {

  someName ="";

  constructor() { }

  ngOnInit(): void {
  }

}

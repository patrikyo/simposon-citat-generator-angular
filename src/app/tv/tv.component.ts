import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
@Input() valdKaraktaer;
@Input() citat; 
  constructor() { }


  ngOnInit() {
  }

}

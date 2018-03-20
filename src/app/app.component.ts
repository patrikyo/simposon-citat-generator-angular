import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	valdKaraktaer = "";
	citat = "";
	aktivKaraktaer(namn){
		this.valdKaraktaer = namn;
	}
	aktivCitat(citat){
		this.citat = citat;
	}
}

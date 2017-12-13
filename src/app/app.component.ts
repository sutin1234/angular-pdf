import { Component, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 PDF Created';

  constructor(@Inject('Window') private window: Window) {

  }
  download() {
    const doc = new jsPDF();
    const imgData = 'data:image/jpeg;base64,' + window.Base64.encode('Koala.jpeg');
    console.log(imgData);
    doc.setFontSize(40);
    doc.text(30, 20, 'Hello world!');
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
    doc.output('datauri');
  }
}

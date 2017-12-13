import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appImageBlob]'
})
export class ImageBlobDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterContentInit() {
      console.log(this.el.nativeElement.getAttribute('src'));
      this.getBlob(this.el.nativeElement.getAttribute('src')).then((result) => {
          console.log('blob ', result);
      });
  }
  getBlob(url): Promise<any> {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload  = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
  }

}

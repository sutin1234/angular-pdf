import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageBlobDirective } from './directives/image-blob.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageBlobDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

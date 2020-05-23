import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

import { AppComponent } from "./app.component";
import { CountState } from "./app.state";

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CountState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

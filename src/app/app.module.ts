import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './home/intro/intro.component';
import { FeaturesComponent } from './home/features/features.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { CallToActionComponent } from './home/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    FeaturesComponent,
    ShowcaseComponent,
    TestimonialsComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

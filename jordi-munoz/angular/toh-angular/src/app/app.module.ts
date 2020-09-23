import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';

@NgModule({
	declarations: [
		AppComponent,
		DetailsComponent,
		DashboardComponent,
		HeroesComponent,
		MessageComponent
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

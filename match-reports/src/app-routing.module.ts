// Import RouterModule and the routes array
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Apply the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }

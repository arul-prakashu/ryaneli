import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule,SidebarComponent,ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    // Store selected category, country, and league
    selectedCategory: string = '';
    selectedCountry: string = '';
    selectedLeague: string = '';
  
    // Method to update the selected values
    updateSelection(type: string, value: string): void {
      if (type === 'category') {
        this.selectedCategory = value;
      } else if (type === 'country') {
        this.selectedCountry = value;
      } else if (type === 'league') {
        this.selectedLeague = value;
      }
    }
  appTitle = 'match-reports';
  appDescription="This is a simple Angular application to display match reports";
  title = 'angular-routing';

}

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  imports: [CommonModule, MatIconModule,FormsModule],
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  matches = [
    {
      league: "1X2",
      radar: 1.85,
      falcon: 2.05,
      sinLimit: 100000,
      sinRisk: 0.85,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Home",
      radar: 1.65,
      falcon: 2.10,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Draw",
      radar: 3.40,
      falcon: 3.20,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Away",
      radar: 2.75,
      falcon: 2.30,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      league: "Under over 1.5",
      radar: 1.55,
      falcon: 2.00,
      sinLimit: 100000,
      sinRisk: 1.10,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Under",
      radar: 1.70,
      falcon: 2.25,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Over",
      radar: 3.00,
      falcon: 2.75,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      league: "Under over 2.5",
      radar: 1.80,
      falcon: 2.10,
      sinLimit: 100000,
      sinRisk: 1.15,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Under",
      radar: 1.65,
      falcon: 2.25,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Over",
      radar: 3.20,
      falcon: 2.85,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      league: "Under over 3.5",
      radar: 1.90,
      falcon: 2.30,
      sinLimit: 100000,
      sinRisk: 1.20,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Under",
      radar: 1.60,
      falcon: 2.20,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Over",
      radar: 3.10,
      falcon: 2.80,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      league: "Both teams to score",
      radar: 1.75,
      falcon: 2.00,
      sinLimit: 100000,
      sinRisk: 590,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "Yes",
      radar: 2.85,
      falcon: 2.55,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    },
    {
      option: "No",
      radar: 2.20,
      falcon: 2.00,
      sinLimit: 50000,
      range: 0,
      falconChanged: false,
      sinLimitChanged: false
    }
  ];
  
  

  currentMatchIndex: number = -1; // Initially no match details are shown

  // Function to toggle the details visibility for the clicked match
  toggleDetails(index: number) {
    if (this.currentMatchIndex === index) {
      // If the clicked match is already open, close it
      this.currentMatchIndex = -1;
    } else {
      // Open the clicked match's details and close the previously opened one
      this.currentMatchIndex = index;
    }
  }
 
  // Track the current row and column being edited
  isEditing: number = -1;
  isEditingSinLimit: number = -1;

  // Toggle edit mode for Falcon column
  toggleEdit(index: number): void {
    this.isEditing = this.isEditing === index ? -1 : index;
  }

  // Toggle edit mode for Sin Limit column
  toggleEditSinLimit(index: number): void {
    this.isEditingSinLimit = this.isEditingSinLimit === index ? -1 : index;
  }

  // Save the changes and exit editing mode
  saveEdit(index: number, field: string): void {
    if (field === 'falcon') {
      this.matches[index].falconChanged = true;
    } else if (field === 'sinLimit') {
      this.matches[index].sinLimitChanged = true;
    }

    if (field === 'falcon') {
      this.isEditing = -1;
    } else if (field === 'sinLimit') {
      this.isEditingSinLimit = -1;
    }
  }

  // Move focus between cells based on the arrow key pressed
  moveFocus(index: number, direction: string): void {
    if (direction === 'down') {
      // Move down to the next row, if available
      if (index < this.matches.length - 1) {
        this.isEditing = index + 1;
      }
    } else if (direction === 'up') {
      // Move up to the previous row, if available
      if (index > 0) {
        this.isEditing = index - 1;
      }
    } else if (direction === 'left') {
      // Move to the previous editable column
      this.isEditingSinLimit = index;
    } else if (direction === 'right') {
      // Move to the next editable column
      this.isEditing = index;
    }
  }
}

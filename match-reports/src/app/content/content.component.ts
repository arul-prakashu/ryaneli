import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  imports: [CommonModule, MatIconModule, FormsModule],
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  matches = [
    { league: "1X2", radar: 1.85, falcon: 2.05, sinLimit: 100000, sinRisk: 0.85, falconChanged: false, sinLimitChanged: false },
    { option: "Home", radar: 1.65, falcon: 2.10, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "Draw", radar: 3.40, falcon: 3.20, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "Away", radar: 2.75, falcon: 2.30, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { league: "Under over 1.5", radar: 1.55, falcon: 2.00, sinLimit: 100000, sinRisk: 1.10, falconChanged: false, sinLimitChanged: false },
    { option: "Under", radar: 1.70, falcon: 2.25, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "Over", radar: 3.00, falcon: 2.75, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { league: "Under over 2.5", radar: 1.80, falcon: 2.10, sinLimit: 100000, sinRisk: 1.15, falconChanged: false, sinLimitChanged: false },
    { option: "Under", radar: 1.65, falcon: 2.25, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "Over", radar: 3.20, falcon: 2.85, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { league: "Under over 3.5", radar: 1.90, falcon: 2.30, sinLimit: 100000, sinRisk: 1.20, falconChanged: false, sinLimitChanged: false },
    { option: "Under", radar: 1.60, falcon: 2.20, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "Over", radar: 3.10, falcon: 2.80, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { league: "Both teams to score", radar: 1.75, falcon: 2.00, sinLimit: 100000, sinRisk: 590, falconChanged: false, sinLimitChanged: false },
    { option: "Yes", radar: 2.85, falcon: 2.55, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "No", radar: 2.20, falcon: 2.00, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { league: "Both teams to score", radar: 1.75, falcon: 2.00, sinLimit: 100000, sinRisk: 590, falconChanged: false, sinLimitChanged: false },
    { option: "Yes", radar: 2.85, falcon: 2.55, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false },
    { option: "No", radar: 2.20, falcon: 2.00, sinLimit: 0, range: 0, falconChanged: false, sinLimitChanged: false }
  ];

  currentMatchIndex: number = -1; // Initially no match details are shown

  // Function to toggle the details visibility for the clicked match
  toggleDetails(index: number) {
    this.currentMatchIndex = this.currentMatchIndex === index ? -1 : index;
  }

  isEditing: number = -1;
  isEditingSinLimit: number = -1;

  // Trigger edit mode on right-click
  onRightClick(event: MouseEvent, index: number) {
    event.preventDefault();  // Prevent the default context menu from appearing
    this.isEditing = index;  // Set the clicked cell to be in edit mode
  }

  onRightClickSinLimit(event: MouseEvent, index: number) {
    event.preventDefault();  // Prevent the default context menu from appearing
    this.isEditingSinLimit = index;  // Set the clicked cell to be in edit mode
  }

  // Trigger edit mode when mouse is released (mouseup)
  onMouseUp(index: number) {
    if (this.isEditing === -1) {
      this.isEditing = index;  // Set the clicked cell to be in edit mode if it's not already
    }
  }

  onMouseUpSinLimit(index: number) {
    if (this.isEditing === -1) {
      this.isEditingSinLimit = index;  // Set the clicked cell to be in edit mode if it's not already
    }
  }

  // Save the changes and exit editing mode
  saveEdit(index: number, field: string): void {
    this.matches[index].falconChanged = true;
    this.isEditing = -1;
  }

  saveEditSinLimit(sinLimit: any, index: number, field: string): void {
    this.matches[index].sinLimitChanged = true;
    this.isEditingSinLimit = -1;
  }

  // Function to generate a background gradient color based on sinLimit value (percentage-based)
  getGradientColor(value: number | string): string {
    let numValue = typeof value === 'string' ? parseFloat(value) : value;
    numValue = Math.max(0, Math.min(100, numValue)); // Ensure the value is between 0 and 100

    const startColor = `rgb(${255 - (numValue * 2)}, ${numValue * 2}, 0)`; // Red to Green gradient
    const endColor = `rgb(255, 255, 255)`; // White to complete the gradient effect

    return `linear-gradient(to right, ${startColor} ${numValue}%, ${endColor} ${numValue}%)`;
  }

  isCellClicked: number | null = null;  // Track the clicked cell index

  // Handle the cell click event
  onCellClick(i: number): void {
    this.isCellClicked = this.isCellClicked === i ? null : i; // Toggle clicked state
  }

  onInputChange(event: any) {
    let numericValue = event.target.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    event.target.value = numericValue;
  }

  // Method to handle input field click
  onInputClick(i: number): void {
    this.isCellClicked = this.isCellClicked === i ? null : i; // Toggle clicked state
  }
}

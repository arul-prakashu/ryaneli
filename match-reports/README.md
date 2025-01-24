# MatchReports User Guide

## Overview

The MatchReports application allows users to view, edit, and manage match data. It includes functionality for editing match odds (Radar, Falcon), Sin Risk, and Sin Limit for different match options and leagues.

## Main Features

### Viewing Match Data
- The app displays match data in a table format, with columns for `Option`, `Radar`, `Falcon`, `Sin Risk`, and `Sin Limit`.
- For some rows, leagues are shown (e.g., 1X2, Under/Over), while others display match options (e.g., Home, Away).

### Editing Match Data
- **Radar**: The `Radar` column is displayed as a read-only value.
- **Falcon**: The `Falcon` column is editable. Right-click (or long press on mobile) to enter edit mode. After editing, press `Enter` to save the changes.
- **Sin Risk**: This column shows the `Sin Risk` associated with each match option. It’s read-only.
- **Sin Limit**: The `Sin Limit` column allows you to edit the limit for a match. The value is capped to 100,000. Changes can be made in the input field when the cell is clicked or right-clicked.

### Dynamic Updates
- As you edit the `Falcon` and `Sin Limit` columns, the row will highlight to indicate changes. Once saved, the row will reflect the new value, and the color will adjust accordingly.

## Editing Data

### To Edit Falcon Values
- Right-click (or tap and hold on mobile) on the Falcon cell for the match you want to edit. An input field will appear, allowing you to modify the value.

### To Edit Sin Limit Values
- Click (or tap on mobile) on the Sin Limit cell, which will trigger an editable input field for you to modify the value.

## Saving Changes
- Once you've made your changes in the input fields, pressing `Enter` will save the value and exit edit mode. The changes are applied to the data and will be highlighted in the table.

## Color Indicators
- The **Sin Limit** column will be dynamically colored based on the value you input, with a gradient from red to green as the limit increases.

## Additional Features

### Match Details Toggle
- Click on any match row to toggle additional details for that match. If a row is already open, clicking again will close it.

---

## Known Issues

- Currently, the application does not support multi-cell editing or bulk updates.
- Some older browsers may not fully support dynamic styling features (like gradients).

## Feedback
If you encounter any issues or have suggestions for improvements, please feel free to submit them as an issue in the repository.

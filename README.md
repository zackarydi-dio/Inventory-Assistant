# Inventory Assistant

A lightweight inventory management tool that calculates key metrics and automates reorder recommendations for efficient supply chain management.

## Overview

The Inventory Assistant is a JavaScript-based application that helps businesses make data-driven inventory decisions. It analyzes current stock levels, demand patterns, and supplier lead times to provide actionable reorder recommendations and critical inventory metrics.

## Features

- **Weeks of Cover Calculation**: Determines how many weeks of inventory are available based on current stock and weekly demand
- **Stock Level Monitoring**: Compares current inventory against reorder levels to identify when restocking is needed
- **Intelligent Reorder Recommendations**: Automatically determines when to reorder based on stock thresholds and lead time requirements
- **Cost Estimation**: Calculates the estimated cost of recommended reorders
- **Lead Time Consideration**: Accounts for supplier lead times to prevent stockouts

## How It Works

The assistant evaluates inventory status using the following metrics:

1. **Current Stock vs. Reorder Level**: Triggers reorder when current stock falls below threshold
2. **Weeks of Cover**: Calculates remaining inventory duration at current demand rates
3. **Lead Time Buffer**: Ensures reorder quantity accounts for supplier delivery delays
4. **Target Stock Deficit**: Determines the quantity needed to reach optimal inventory levels

## Installation & Usage

1. Open `index.html` in a web browser
2. The application will execute `inventory_assistant.js` and output results to the browser console
3. View inventory metrics and reorder recommendations in the Developer Console (F12 or Cmd+Option+J on macOS)

## Configuration

Edit the variables in `inventory_assistant.js` to customize for your inventory:

```javascript
let itemName = "USB-C Cable";          // Product name
let unitCost = 3.25;                   // Cost per unit
let currentStock = 120;                // Current quantity on hand
let reorderLevel = 50;                 // Minimum stock threshold
let targetStock = 200;                 // Desired inventory level
let weeklyDemand = 25;                 // Average weekly consumption
let supplierLeadTimeWeeks = 4;         // Days until delivery
```

## Output

The application generates a console report with:

- Item Name
- Weeks of Cover
- Reorder Recommendation (Yes/No)
- Recommended Reorder Quantity
- Estimated Reorder Cost

## Requirements

- Modern web browser with JavaScript support
- No external dependencies

## Technology Stack

- **HTML5**: Application structure
- **JavaScript (Vanilla)**: Core calculation engine

## License

This project is provided as-is for educational and business purposes.
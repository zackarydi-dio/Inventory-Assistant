const inventoryItem = {
    name: 'USB-C Cable',
    unitCost: 3.25,
    currentStock: 120,
    reorderThreshold: 50,
    targetStock: 200,
    weeklyDemand: 25,
    supplierLeadTimeWeeks: 4,
};

function calculateWeeksOfCover(stock, demand) {
    return demand > 0 ? Number((stock / demand).toFixed(2)) : Infinity;
}

function needsReorder(currentStock, reorderThreshold, weeksOfCover, leadTimeWeeks) {
    return currentStock <= reorderThreshold || weeksOfCover <= leadTimeWeeks;
}

function calculateReorderQuantity(currentStock, targetStock, reorderNeeded) {
    return reorderNeeded ? Math.max(0, Math.ceil(targetStock - currentStock)) : 0;
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function buildInventoryReport(item) {
    const weeksOfCover = calculateWeeksOfCover(item.currentStock, item.weeklyDemand);
    const reorderNeeded = needsReorder(
        item.currentStock,
        item.reorderThreshold,
        weeksOfCover,
        item.supplierLeadTimeWeeks
    );
    const reorderQuantity = calculateReorderQuantity(
        item.currentStock,
        item.targetStock,
        reorderNeeded
    );

    return {
        itemName: item.name,
        currentStock: item.currentStock,
        reorderThreshold: item.reorderThreshold,
        targetStock: item.targetStock,
        weeklyDemand: item.weeklyDemand,
        supplierLeadTimeWeeks: item.supplierLeadTimeWeeks,
        weeksOfCover,
        reorderNeeded,
        reorderQuantity,
        estimatedCost: reorderQuantity * item.unitCost,
    };
}

function renderInventoryReport(report) {
    const container = document.getElementById('inventory-report');
    if (!container) return;

    container.innerHTML = `
        <p><span class="label">Item:</span> ${report.itemName}</p>
        <p><span class="label">Current Stock:</span> ${report.currentStock}</p>
        <p><span class="label">Target Stock:</span> ${report.targetStock}</p>
        <p><span class="label">Reorder Threshold:</span> ${report.reorderThreshold}</p>
        <p><span class="label">Weekly Demand:</span> ${report.weeklyDemand}</p>
        <p><span class="label">Supplier Lead Time:</span> ${report.supplierLeadTimeWeeks} weeks</p>
        <p><span class="label">Weeks of Cover:</span> ${report.weeksOfCover}</p>
        <p><span class="label">Reorder Recommended:</span> ${report.reorderNeeded ? 'Yes' : 'No'}</p>
        <p><span class="label">Recommended Reorder Quantity:</span> ${report.reorderQuantity}</p>
        <p><span class="label">Estimated Reorder Cost:</span> ${formatCurrency(report.estimatedCost)}</p>
    `;

    console.log('Inventory Assistant report:', report);
}

const report = buildInventoryReport(inventoryItem);
renderInventoryReport(report);

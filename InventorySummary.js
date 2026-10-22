const products = [
    { name: "Mouse", price: 150000, stock: 10 },
    { name: "Keyboard", price: 300000, stock: 3 },
    { name: "Monitor", price: 2000000, stock: 2 }
];
function summarizeInventory(items) {
    let totalValue = 0;
    const lowStockProducts = [];
    items.forEach(item => {
        totalValue += item.price * item.stock;
        if (item.stock < 5) {
            lowStockProducts.push(item.name);
        }
    });
    return { totalValue, lowStockProducts };
}
console.log(summarizeInventory(products));
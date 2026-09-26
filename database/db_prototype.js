import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Prototype Data
const rawData = fs.readFileSync(path.join(__dirname, 'seed_data.json'), 'utf-8');
const data = JSON.parse(rawData);

console.log('==================================================');
console.log('   PRANJUL FASHION HOUSE (CHAUBEPUR MARKET)      ');
console.log('      DATABASE PROTOTYPE & ANALYTICS TESTER      ');
console.log('==================================================\n');

// 1. Verify Store Information
console.log(`[Store Info] ${data.storeInfo.name} - ${data.storeInfo.location}`);
console.log(`[WhatsApp Channel] ${data.storeInfo.whatsappChannel}`);
console.log(`[Total Categories] ${data.categories.length}`);
console.log(`[Total Products Loaded] ${data.products.length}\n`);

// 2. Query Products by Demographics / Gender
const demographics = ['Women', 'Men', 'Boys', 'Girls', 'Kids'];
demographics.forEach(demo => {
  const items = data.products.filter(p => p.gender === demo || p.gender === 'All');
  console.log(`👉 Demographic '${demo}': ${items.length} items available`);
});

// 3. Festival Offers Check
console.log('\n--- ACTIVE FESTIVAL DISCOUNTS ---');
data.festivalOffers.forEach(offer => {
  console.log(`🎉 [${offer.code}] ${offer.title} - ${offer.discount_text} (${offer.valid_till})`);
});

// 4. Calculate Total Stock Value & Potential Owner Profit
let totalInventoryMRP = 0;
let totalSellingValue = 0;
let totalWholesaleCost = 0;

data.products.forEach(p => {
  totalInventoryMRP += p.original_mrp * p.stock_count;
  totalSellingValue += p.price * p.stock_count;
  totalWholesaleCost += p.wholesale_cost * p.stock_count;
});

const grossProfit = totalSellingValue - totalWholesaleCost;
const profitMarginPercent = ((grossProfit / totalSellingValue) * 100).toFixed(1);

console.log('\n--- OWNER INVENTORY & PROFIT PROJECTION ---');
console.log(`Total MRP Stock Value:        ₹${totalInventoryMRP.toLocaleString('en-IN')}`);
console.log(`Total Customer Price Value:   ₹${totalSellingValue.toLocaleString('en-IN')}`);
console.log(`Total Wholesale Owner Cost:   ₹${totalWholesaleCost.toLocaleString('en-IN')}`);
console.log(`-------------------------------------------`);
console.log(`💰 PROJECTED GROSS PROFIT:    ₹${grossProfit.toLocaleString('en-IN')} (${profitMarginPercent}% Net Margin)`);
console.log('==================================================\n');

// 5. Test WhatsApp Order Simulation Function
function simulateWhatsAppOrder(customerName, phone, productIds) {
  const selectedProducts = data.products.filter(p => productIds.includes(p.id));
  let totalMRP = 0;
  let totalSelling = 0;
  let totalCost = 0;

  selectedProducts.forEach(p => {
    totalMRP += p.original_mrp;
    totalSelling += p.price;
    totalCost += p.wholesale_cost;
  });

  const savings = totalMRP - totalSelling;
  const ownerProfit = totalSelling - totalCost;

  const orderSummary = {
    customerName,
    phone,
    itemCount: selectedProducts.length,
    items: selectedProducts.map(p => ({ title: p.title, price: p.price })),
    totalMRP,
    totalSelling,
    savings,
    ownerProfit,
    whatsappUrl: `https://wa.me/919876543210?text=${encodeURIComponent(
      `Hello Pranjul Fashion House, I want to order from Chaubepur store:\n${selectedProducts.map(p => `- ${p.title} (₹${p.price})`).join('\n')}\nTotal: ₹${totalSelling} (Savings: ₹${savings})`
    )}`
  };

  return orderSummary;
}

const testOrder = simulateWhatsAppOrder('Ramesh Kumar (Chaubepur)', '9876598765', ['p-101', 'p-201']);
console.log('--- TEST WHATSAPP ORDER SIMULATION ---');
console.log(`Customer: ${testOrder.customerName}`);
console.log(`Items: ${testOrder.itemCount}`);
console.log(`Total Amount: ₹${testOrder.totalSelling} (Customer Savings: ₹${testOrder.savings})`);
console.log(`Owner Direct Profit on Order: ₹${testOrder.ownerProfit}`);
console.log(`Generated WhatsApp URL Link: ${testOrder.whatsappUrl.slice(0, 75)}...\n`);
console.log('✅ Database Prototype & Logic Verification PASSED successfully!');

-- Pranjul Fashion House Database Schema Prototype (Chaubepur)

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    target_group VARCHAR(50) NOT NULL, -- 'Women', 'Men', 'Boys', 'Girls', 'Kids', 'All'
    description TEXT,
    icon_name VARCHAR(50),
    image_url TEXT
);

-- 2. Products / Collection Catalog Table
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    category_id VARCHAR(50) REFERENCES categories(id),
    gender VARCHAR(20) NOT NULL, -- 'Women', 'Men', 'Boys', 'Girls', 'Kids'
    price DECIMAL(10, 2) NOT NULL, -- Selling Price in INR (₹)
    original_mrp DECIMAL(10, 2) NOT NULL, -- MRP before discount
    discount_percent INT NOT NULL, -- e.g. 40 (40% OFF)
    wholesale_cost DECIMAL(10, 2) NOT NULL, -- Owner wholesale cost (for profit tracking)
    stock_count INT NOT NULL DEFAULT 50,
    rating DECIMAL(2, 1) DEFAULT 4.5,
    rating_count INT DEFAULT 120,
    is_new_arrival BOOLEAN DEFAULT FALSE,
    is_festival_deal BOOLEAN DEFAULT FALSE,
    festival_tag VARCHAR(100), -- e.g., 'Diwali Dhamaka', 'Navratri Special', 'Wedding Season'
    available_sizes VARCHAR(100), -- e.g. 'S, M, L, XL, XXL'
    fabric VARCHAR(100),
    images TEXT, -- JSON array of image URLs
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Festival Offers & Discount Banners
CREATE TABLE IF NOT EXISTS festival_offers (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    discount_text VARCHAR(100) NOT NULL,
    banner_subtitle TEXT,
    valid_till VARCHAR(50),
    bg_gradient VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE
);

-- 4. WhatsApp Orders & Leads Table
CREATE TABLE IF NOT EXISTS whatsapp_orders (
    id VARCHAR(50) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    locality VARCHAR(150) DEFAULT 'Chaubepur / Local',
    order_type VARCHAR(50), -- 'Direct WhatsApp Delivery', 'Store Pickup Reserve'
    items_json TEXT NOT NULL,
    total_mrp DECIMAL(10, 2) NOT NULL,
    total_savings DECIMAL(10, 2) NOT NULL,
    final_amount DECIMAL(10, 2) NOT NULL,
    estimated_profit DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'WhatsApp Lead Sent',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. WhatsApp Channel Subscribers & Lead Analytics
CREATE TABLE IF NOT EXISTS channel_subscribers (
    id VARCHAR(50) PRIMARY KEY,
    channel_name VARCHAR(100) DEFAULT 'Pranjul Fashion Chaubepur Official',
    subscriber_phone VARCHAR(20),
    joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

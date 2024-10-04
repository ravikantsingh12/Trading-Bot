// Import the getStockPrices function from the mockApi file
import { getStockPrices } from '../api/mockApi.js';

// Import the Trade model to create trade records
import Trade from '../models/tradeModel.js';

// Define the trading strategy with buy and sell thresholds
const tradeStrategy = {
    buyThreshold: 0.98, // Buys when price drops by 2%
    sellThreshold: 1.03 // Sells when price rises by 3%
};

// An empty array to store trades
const trades = [];

// Export the executeTrades function to run the trading logic
export const executeTrades = async () => {
    let lastPrice = 0; // Store the last price of the stock
    let position = 0; // 1 for holding stock, 0 for no position

    // Set an interval to run the trading logic every 5 seconds
    setInterval(async () => {
        // Get the current stock prices
        const { stock } = await getStockPrices();
        console.log(`Current price: $ ${stock.price}`);

        // Check if we have a last price to compare
        if (lastPrice) {
            // Calculate the price change from the last price
            const priceChange = stock.price / lastPrice;

            // Buying condition: if the price drops by 2% and we don't hold stock
            if (priceChange <= tradeStrategy.buyThreshold && position === 0) {
                position = 1; // Update position to holding stock

                // Create a new Trade and add it to the trades array
                trades.push(new Trade(stock.symbol, 'BUY', stock.price));
                console.log(`Bought at: $ ${stock.price}`);
            }

            // Selling condition: if the price rises by 3% and we are holding stock
            if (priceChange >= tradeStrategy.sellThreshold && position === 1) {
                position = 0; // Update position to not holding stock

                // Create a new Trade and add it to the trades array
                trades.push(new Trade(stock.symbol, 'SELL', stock.price));
                console.log(`Sold at: $ ${stock.price}`);
            }
        }

        // Update the last price to the current stock price
        lastPrice = stock.price;
    }, 5000); // Check prices every 5 seconds
};

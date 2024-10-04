// Import the axios library for making HTTP requests
import axios from 'axios';

// Mock function to get stock prices
export const getStockPrices = async () => {
    // Create mock data with a random stock price
    const mockData = {
        stock: {
            symbol: 'AAPL',
            price: Math.random() * 150 + 100 // For generating random price between 100 and 250
        }
    };
    // Return a promise that resolves after 1 second
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000); // Mock API response time
    });
};

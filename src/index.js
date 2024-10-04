// Import the executeTrades function from the tradingService file
import { executeTrades } from './services/tradingService.js';

// Import the dotenv package to use environment variables
import dotenv from 'dotenv';

// For loading the environment variables from the .env file
dotenv.config();

// To start the trading bot
const startBot = () => {
    // Prints a message that the trading bot has started
    console.log('Trading bot started...');

    // Calls the executeTrades function to start trading
    executeTrades();
};

// Runs the startBot function to start the bot
startBot();

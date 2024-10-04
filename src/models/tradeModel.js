// Define the Trade class to create trade objects
class Trade {
    // Constructor to initialize a new Trade object
    constructor(symbol, action, price) {
        this.symbol = symbol; // Stock symbol
        this.action = action; // Action taken (BUY/SELL)
        this.price = price; // Price at which the trade was made
        this.timestamp = new Date(); // Record the current date and time of the trade
    }
}
// Export the Trade class to use in other files
export default Trade;

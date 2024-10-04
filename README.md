# Trading Bot

## Overview
Welcome to the **Trading Bot**! <br> This application simulates a basic trading bot for a hypothetical stock market, designed to help you understand stock trading mechanics and automated trading strategies.

## Features
- **Continuous Monitoring:** Keeps an eye on stock price changes using mock data.
- **Automated Trading:** Executes trades based on predefined rules and strategies.
- **Profit/Loss Tracking:** Monitors and reports the bot’s performance, including a summary of trades made.

## Installation and Setup

Follow these steps to get your trading bot up and running:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with **`npm install`** <br>
    **axios**: For making API calls.<br>
    **dotenv**: For managing environment variables.
4. Run the application using **`node src/index.js`**.

## Folder
  ```csharp
trading-bot/
│
├── src/
│   ├── api/
│   │   └── mockApi.js           # Mock API for stock prices
│   ├── services/
│   │   └── tradingService.js    # Trading logic and strategies
│   ├── models/
│   │   └── tradeModel.js        # Trade and profit/loss tracking
│   ├── index.js                 # Entry point of the application
│   └── utils/
│       └── logger.js            # Logging utility
│
├── .env                         # Environment variables
├── package.json                 # Project metadata
└── README.md                    # Documentation


```

## Trading Logic
The trading strategies employed by the bot are as follows:

**Buy Condition:** The bot buys stocks when the price drops by 2%.<br>
**Sell Condition:** The bot sells stocks when the price rises by 3%.

## Credits

This project was created by [Ravikant Singh](https://github.com/ravikantsingh12). Contributions via issues or pull requests are welcome!

## Follow me on

- [LinkedIn](https://www.linkedin.com/in/ravikant-singh-327a98241)
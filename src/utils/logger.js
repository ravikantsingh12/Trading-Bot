// Export the log function to use in other files
export const log = (level, message) => {
    // To get the log level from the environment variables or use 'info' as default
    const logLevel = process.env.LOG_LEVEL || 'info';

    // For checking if the given level matches the log level
    if (level === logLevel) {
        // Prints the message with the current date and time
        console.log(`[${new Date().toISOString()}] ${message}`);
    }
};
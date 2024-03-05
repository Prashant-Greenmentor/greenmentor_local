const server = require("./src/app"); // Import your Express app

// Function to close the server
async function teardown() {
  await new Promise((resolve) => server.close(resolve));
}

// Hook to run after all tests have completed
afterAll(async () => {
  await teardown(); // Stop the server
});

// Jest timeout configuration
jest.setTimeout(30000); // Set timeout to 30 seconds

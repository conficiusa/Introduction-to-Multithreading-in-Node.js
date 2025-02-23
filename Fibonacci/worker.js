// worker.js
const { parentPort } = require("worker_threads");

// A recursive function to calculate Fibonacci numbers (inefficient for large inputs)
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate Fibonacci of a number (e.g., 40)
const result = fibonacci(40);

// Send the result back to the main thread
parentPort.postMessage(result);

// main.js
const { Worker } = require("worker_threads");

// Create a new worker that runs the worker.js script
const worker = new Worker("./worker.js");

// Listen for messages from the worker
worker.on("message", (result) => {
  console.log(`Fibonacci result: ${result}`);
});

// Handle any errors from the worker
worker.on("error", (error) => {
  console.error(`Worker error: ${error}`);
});

// Listen for the exit event to know when the worker is done
worker.on("exit", (code) => {
  if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
});

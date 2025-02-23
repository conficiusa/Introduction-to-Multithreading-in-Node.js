// server.js
const { Worker } = require("worker_threads");
const path = require("path");

function processImageInWorker(imagePath, width, height, outputPath) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, "imageWorker.js"), {
      workerData: { imagePath, width, height, outputPath },
    });

    worker.on("message", (result) => {
      if (result.status === "success") {
        resolve(result);
      } else {
        reject(result.error);
      }
    });

    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// Example usage: Process two images concurrently
async function processImages() {
  const tasks = [
    processImageInWorker(
      "./images/image1.jpg",
      200,
      200,
      "./output/image1_thumb.jpg"
    ),
    processImageInWorker(
      "./images/image2.jpg",
      200,
      200,
      "./output/image2_thumb.jpg"
    ),
  ];

  try {
    const results = await Promise.all(tasks);
    console.log("All images processed successfully:", results);
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

processImages();

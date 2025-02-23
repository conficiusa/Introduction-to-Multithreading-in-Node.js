// imageWorker.js
const { parentPort, workerData } = require("worker_threads");
const sharp = require("sharp");

async function processImage(imagePath, width, height, outputPath) {
  try {
    await sharp(imagePath).resize(width, height).toFile(outputPath);
    parentPort.postMessage({ status: "success", outputPath });
  } catch (error) {
    parentPort.postMessage({ status: "error", error: error.message });
  }
}

processImage(
  workerData.imagePath,
  workerData.width,
  workerData.height,
  workerData.outputPath
);

# Image Processing with Worker Threads

This example demonstrates how to process multiple images concurrently using Node.js Worker Threads.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Check the `output` directory:
```bash
ls output
# or
dir output
```
Notice that it's empty - we'll fill it with processed images!

3. Run the server:
```bash
node server.js
```

4. Watch as multiple images are processed simultaneously, demonstrating the power of concurrent execution in Node.js.

The processed images will appear in the `output` directory, each having been processed in a separate thread.

For a detailed explanation of how this works, visit our [blog post](https://confidev.vercel.app/posts/introduction-to-multithreading-in-node-js).

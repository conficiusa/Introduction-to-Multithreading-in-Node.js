# Fibonacci Sequence Calculator with Worker Threads

## What is the Fibonacci Sequence?
The Fibonacci sequence is a series of numbers where each number is the sum of the previous two numbers. Starting with 0 and 1, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

## Table of Contents
- [Introduction](#introduction)
- [Why Use Multithreading?](#why-use-multithreading)
- [Running the Example](#running-the-example)
- [How It Works](#how-it-works)

## Introduction
This example demonstrates how to calculate Fibonacci numbers using worker threads in Node.js.

## Why Use Multithreading?
Calculating Fibonacci numbers recursively is CPU-intensive. By using worker threads, we can:
- Calculate multiple Fibonacci numbers simultaneously
- Prevent blocking the main thread
- Utilize multiple CPU cores

## Running the Example
Execute the following command:
```bash
node main.js
```

## How It Works
The program splits Fibonacci calculations across multiple worker threads, demonstrating parallel processing capabilities in Node.js.

For a detailed explanation of the implementation, visit our [blog post](https://confidev.vercel.app/posts/introduction-to-multithreading-in-node-js).

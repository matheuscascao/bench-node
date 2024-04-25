# Console.log Benchmark on Node.js

## Introduction

Console.log benchmark on nodejs - does using console.log really affect the performance of my app?

## Performance Considerations

### Impact of `console.log`

`console.log` can introduce synchronous blocking, potentially affecting the performance of time-sensitive or high-throughput applications.

### Disclaimer: Setting `stdout` to None

Setting `stdout` to None (`/dev/null` in Unix-like systems) during benchmarking eliminates console I/O overhead for more accurate performance measurement.
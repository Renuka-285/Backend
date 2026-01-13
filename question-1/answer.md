
1.Node.js Architecture
=>It tells how js code interacts with system operations
=>request and responses
JS Code
↓
V8 Engine (Compile & Execute)
↓
Node.js Core APIs
↓
Native Bindings (JS → C/C++)
↓
libuv + Event Loop
↓
OS / File / Network / DB
↓
Callback → Event Loop → JS
Node.js uses the V8 engine to execute JavaScript, Node.js core APIs for system access, native bindings to communicate with C/C++, and an event loop powered by libuv to handle asynchronous, non-blocking operations efficiently.
2.libuv
=>libuv is a C,c++ library
=>It is the backbone of Node.js
3.Thread Pool
=>performs group of tsaks at a time withoutblocking
=>Some tasks cannot be handled asynchronously by the OS:

File system operations

Cryptographic operations

DNS lookups
4.Worker Threads
=>Worker threads are real JavaScript threads that allow Node.js to run multiple JS files in parallel.
=>Node.js main thread is single-threaded.
Worker threads are used for:
CPU-heavy tasks
Long computations
Preventing event loop blocking
5.Event Loop Queues
=>file i/o,network requests,database ops,os tasks
Macro Task Queue:
Examples
1.setTimeout
2.setInterval
3.setImmediate
4.I/O callbacks
Micro Task Queue:
Executed immediately after the current execution completes
Examples:
1.Promise.then()
2.Promise.catch()
3.process.nextTick()





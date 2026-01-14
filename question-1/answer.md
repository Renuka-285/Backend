
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

---------------------------------
a. Package Managers
A package manager is a tool that helps developers install, update, remove, and manage external libraries (packages) that a project depends on.  
In backend development, these packages save time by providing ready-made solutions for common tasks like routing, database access, and authentication.

ex:Instead of writing your own server logic from scratch, you can install the `express` package to quickly create a web server.
To reuse existing, tested code instead of reinventing the wheel  
- To manage project dependencies easily  
- To ensure consistency across different environments (development, testing, production)  
- To save time and reduce bugs  
Manual downloading and copying of libraries  
- Version conflicts between libraries  
- Difficulties in setting up the project on another system  
- No clear record of which libraries and versions are used  
What is NPM?
NPM is the default package manager for Node.js. It allows developers to install and manage JavaScript packages from the NPM registry, which is a large online repository of open-source libraries.
 It simplifies dependency management  
- It helps run project-related scripts  
- It maintains consistency across teams  
- It makes project setup faster and more reliable
How NPM helps in managing dependencies
- Dependencies are listed in the `package.json` file  
- Exact installed versions are locked in `package-lock.json`  
- Commands like `npm install` automatically install all required packages  
Example:**  
```bash
npm install express
```
This installs Express and records it in `package.json`.
Backend Project Initialization

What is the command used to initialize a backend (Node.js) project?
```bash
npm init
```

---

 Explain what `npm init` and `npm init -y` do
- `npm init`  
  Starts an interactive process where you answer questions (project name, version, description, etc.) to create `package.json`.

- `npm init -y`  
  Automatically creates `package.json` with default values without asking questions.

---
 d. Files and Folders Created After Project Initialization

 package.json
- Acts as the heart of the Node.js project  
- Contains project metadata, scripts, and dependencies  
- Helps others understand and run the project  

---

 node_modules
- Contains all installed dependencies  
- Automatically created when packages are installed  
- Can be regenerated using `npm install`  

---

 package-lock.json
- Records the exact versions of installed dependencies  
- Ensures consistent installations across systems  
- Improves security and reliability  

---
 GitHub Best Practices

Files/Folders that should NOT be pushed to GitHub
- `node_modules/`  
  - Very large in size  
  - Can be regenerated using `npm install`  

---
 Files that MUST be committed
- `package.json`  
  - Defines project dependencies and scripts  
- `package-lock.json`  
  - Ensures version consistency  

---

Summary: 
Using NPM and proper project initialization helps maintain clean, scalable, and collaborative backend Node.js projects.




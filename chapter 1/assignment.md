Assignments (Questions Only)
1. If you delete the node_modules folder, how will you run your application again successfully?

Ans. If you delete the node_modules folder, you can restore everything by reinstalling dependencies 
    using:
            npm install
    Why this works:
       -> All dependencies are listed in package.json
       -> Exact versions are stored in package-lock.json
       -> npm install recreates the node_modules folder automatically

2. How can you use command line arguments in Node.js (e.g., node index.js 3 2) and access those values inside your program?

Ans. You can use command line arguments in Node.js via the process.argv array.

    Example
        Run in terminal:-      node index.js 3 2
    In index.js: 
            //
            const args = process.argv;
            const num1 = args[2];
            const num2 = args[3];
            console.log("First number:", num1);
            console.log("Second number:", num2);
            //
    Output:
        First number: 3
        Second number: 2
    Important points 
        process.argv[0] → node path
        process.argv[1] → file path
        process.argv[2] → first argument (3)
        process.argv[3] → second argument (2)

3. Explore the os module in Node.js. What information about your operating system can you access using it?

4. Explain the asynchronous nature of JavaScript as a single-threaded language and how it is achieved using the Event Loop.

5. Can you run a system command from a Node.js file (e.g., ls or dir) and store its output in a text file?
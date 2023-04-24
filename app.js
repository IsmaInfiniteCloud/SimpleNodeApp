// const amount = 12;

// function myFunc(amount){
//     if(amount < 10){
//         console.log("small number");
//     } else if(amount === 10 || amount > 12){
//         console.log("equal or bigger");
//     }
    
    
// }
// console.log("it's alive !!!")



// //same function writren landa style

// const maFonct = (amount) => {
//     if(amount < 10){
//         console.log("small number");
//     } else if(amount === 10 || amount > 12){
//         console.log("equal or bigger");
//     }
// };

// maFonct(10);

// maFonct(44);
// const {readFileSync,writeFileSync}= require('fs')

// console.log('start')

// const secret = readFileSync('./content/subFolder/secret.txt','utf8')
// const first = readFileSync('./content/subFolder/SubSubFolder/first.txt','utf8')

// writeFileSync(
//     './content/subFolder/result-async.txt',
//     `Here is the result : ${secret},${first}`,{flag:'a'}
// )

// console.log('done with this task')
// console.log('====STARTING====THE====NEXT====ONE======')

//HTTP SERVERS

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`listening to port 3000`);
  if (req.url === '/') {
    res.end(`
      <html>
        <head>
          
          <title>My Website</title>
          <link rel="stylesheet" href="https://cdn.tailwindcss.com/dist/tailwind.min.css">
        
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            h1 {
              color: #f44336;
            }
          </style>
        </head>
        <body>
        <header class="header">
        <h1 class="text-6xl font-bold text-center text-blue-500 animate-bounce">Welcome to my website</h1>
      </header>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
          <h1>Welcome to my website</h1>
          <p>This is the home page</p>
        </body>
      </html>
    `);} else if (req.url === '/contacts') {
    res.end(`
      <html>
        <head>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com/dist/tailwind.min.css">
          <title>Contacts</title>
          <style>
        
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            h1 {
              color: #f44336;
            }
          </style>
        </head>
        <body>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
          <h1>Contacts</h1>
          <p>This is the contact page</p>
        </body>
      </html>
    `);
  } else if (req.url === '/products') {
    res.end(`
      <html>
        <head>
          <title>Products</title>
          <link rel="stylesheet" href="https://cdn.tailwindcss.com/dist/tailwind.min.css">
          <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </nav>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            h1 {
              color: #f44336;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              text-align: left;
              padding: 8px;
            }
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
     
          <h1>Products</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product 1</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Product 2</td>
                <td>$20.00</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);
  } else {
    res.end(`
      <html>

        <head>
          <title>Error</title>
          <link rel="stylesheet" href="https://cdn.tailwindcss.com/dist/tailwind.min.css">
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            h1 {
              color: #f44336;
            }
          </style>
        </head>
        <body>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
          <h1>Oops!</h1>
          <h3>Something went wrong</h3>
        </body>
      </html>
    `);
  }
});

server.listen(3000);
console.log(`Listening to server in port 3000`);



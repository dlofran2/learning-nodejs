const requestHandler = (req, res) => {
    const { url, method } = req;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Exercise 1 -- Home</title>
                </head>
                <body>
                    <h1>Greeting new user</h1>
                    <form method="POST" action="/create-user">
                        <input type="text" name="username" />
                        <button type="submit">Add user</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    } else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Exercise 1 -- Users</title>
                </head>
                <body>
                    <h1>Users</h1>
                    <ul>
                        <li>Zienni</li>
                        <li>AppaPapa</li>
                    </ul>
                </body>
            </html>
        `);
        return res.end();
    } else if (url === '/create-user' && method === 'POST') {
        const buffer = [];

        req.on('data', chunk => {
            buffer.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(buffer).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);

            res.statusCode = 301; // Moved permanently since all requests to this should go to /users
            res.setHeader('Location', '/users');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>Exercise 1 -- Home</title>
            </head>
            <body>
                <h1>Greeting new user</h1>
                <form type="POST" action="/create-user">
                    <input type="text" name="username" />
                    <button type="submit">Add user</button>
                </form>
            </body>
        </html>
    `);
    return res.end();
};

module.exports = requestHandler;

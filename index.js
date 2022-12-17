const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/'));

// let requireStack = require('require-stack')
// try{
//   requireStack('./module/with/syntax/error')
// }catch(e){
//   console.log(e.stack)
// }

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// listening the server
app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});

// <Directory /var/www/html/inversionesbryan.com/public_html>
//         Require all granted
// </Directory>
// <VirtualHost *:80>
//         ServerName inversionesbryan.com
//         ServerAlias www.inversionesbryan.com
//         ServerAdmin webmaster@localhost
//         DocumentRoot /var/www/html/inversionesbryan.com/public_html

//         ErrorLog /var/www/html/inversionesbryan.com/logs/error.log
//         CustomLog /var/www/html/inversionesbryan.com/logs/access.log combined

// </VirtualHost>

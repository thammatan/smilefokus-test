const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();
 
app.use('/api', createProxyMiddleware({ target: 'https://wegivmerchantapp.firebaseapp.com', changeOrigin: true }));
app.listen(5000);
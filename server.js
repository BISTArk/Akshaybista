const express = require('express');

const app=express();

app.use(express.static('public'));

PORT = process.env.PORT || 3007;
app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`));
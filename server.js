const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8001;

app.use(cors());

app.get('/', (req, res) => {
	return res.json({ message: 'hello' });
});
app.listen(PORT, () => `Server is listening on port ${PORT}`);

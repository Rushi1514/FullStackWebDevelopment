const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
app.use(express.json());

NODE_ENV = process.env.NODE_ENV
function getEnvironmentVariable(variableName) {
  const env =  NODE_ENV || 'development'; 
  const envFilePath = `.env.${env}`;

  dotenv.config({ path: envFilePath });

  return process.env[variableName] || null;
}

app.post('/api/login', (req, res) => {
  const dbUsername = getEnvironmentVariable('DB_USERNAME');
  const dbPassword = getEnvironmentVariable('DB_PASSWORD');
  console.log(`dbUSername : ${dbUsername} and dbPassword : ${dbPassword}`)
  res.json({ message: 'Login successful' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
}); 

const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const fd = new FormData();
fd.append('images[0][file]', fs.createReadStream('../backend/valid.jpg'));
fd.append('images[0][type]', 'Other');

axios.post('http://localhost:8000/api/test-upload', fd, {
  headers: fd.getHeaders()
}).then(res => console.log("SUCCESS:", res.data))
  .catch(err => console.log("ERROR:", err.response.data));

import express from 'express';
import path from 'path';
import api from './routes/index.js'

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Serve the API routes
app.use('/api', api);

// Serve our public folder
app.use(express.static('public'));

// Serve routes for static pages
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Listens to app on our local server
app.listen(PORT, () =>
  console.log(`Serving app at http://localhost:${PORT}`)
);

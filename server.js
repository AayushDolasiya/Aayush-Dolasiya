import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'messages.json');

// Ensure data directory and file exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

if (!fs.existsSync(dataFile)) {
  const defaultMessages = [
    {
      id: "msg-1",
      name: "Aisha Vance",
      email: "aisha@vancecorp.co",
      message: "Hey Aayush! Love the neubrutalist portfolio design! This is incredibly clean and snappy. Let's schedule a call next Tuesday to discuss our MERN dashboard project.",
      timestamp: "2026-07-17 14:32 UTC"
    },
    {
      id: "msg-2",
      name: "John Miller (Recruiter)",
      email: "j.miller@talentlabs.io",
      message: "Excellent MERN stack portfolio. The interactive terminal diagnostics widget is a very clever touch. Are you open to remote contract-to-hire roles starting next month?",
      timestamp: "2026-07-18 09:15 UTC"
    }
  ];
  fs.writeFileSync(dataFile, JSON.stringify(defaultMessages, null, 2));
}

// Get all messages
app.get('/api/messages', (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFile, 'utf-8');
    const messages = JSON.parse(rawData);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read messages' });
  }
});

// Submit a new message
app.post('/api/messages', (req, res) => {
  try {
    const { name, email, message, timestamp } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const rawData = fs.readFileSync(dataFile, 'utf-8');
    const messages = JSON.parse(rawData);

    const newMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      message,
      timestamp: timestamp || new Date().toISOString().replace('T', ' ').substring(0, 16) + ' UTC'
    };

    messages.unshift(newMessage); // Add to beginning

    fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Delete a message
app.delete('/api/messages/:id', (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFile, 'utf-8');
    const messages = JSON.parse(rawData);
    
    const filteredMessages = messages.filter((m) => m.id !== req.params.id);
    
    fs.writeFileSync(dataFile, JSON.stringify(filteredMessages, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

// Reset to default
app.post('/api/messages/reset', (req, res) => {
    try {
        const defaultMessages = [
            {
              id: "msg-1",
              name: "Aisha Vance",
              email: "aisha@vancecorp.co",
              message: "Hey Aayush! Love the neubrutalist portfolio design! This is incredibly clean and snappy. Let's schedule a call next Tuesday to discuss our MERN dashboard project.",
              timestamp: "2026-07-17 14:32 UTC"
            },
            {
              id: "msg-2",
              name: "John Miller (Recruiter)",
              email: "j.miller@talentlabs.io",
              message: "Excellent MERN stack portfolio. The interactive terminal diagnostics widget is a very clever touch. Are you open to remote contract-to-hire roles starting next month?",
              timestamp: "2026-07-18 09:15 UTC"
            }
          ];
          fs.writeFileSync(dataFile, JSON.stringify(defaultMessages, null, 2));
          res.json(defaultMessages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to reset messages' });
    }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

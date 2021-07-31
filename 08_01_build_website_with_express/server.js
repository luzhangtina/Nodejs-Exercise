const express = require('express');
const path = require('path');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes/index');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

// Mount routing sub module to application
app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

const server = app.listen(port, () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

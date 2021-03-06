const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const creatError = require('http-errors');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes/index');

const app = express();

const port = 3000;

// To tell express to trust cookie passed through reverse proxy
app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['GHASDFJADSeiffg', 'hhktjdaskdfjgadfjkasdjf'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'ROUX Meetups';

app.use(express.static(path.join(__dirname, './static')));

app.use(async (_req, res, next) => {
  try {
    const names = await speakersService.getNames();
    res.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

// Mount routing sub module to application
app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

app.use((request, response, next) => next(creatError(404, 'File not found')));

// When error happens, render the error page
app.use((err, request, response, next) => {
  console.error(err);
  response.locals.message = err.message;
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  return response.render('error');
});
const server = app.listen(port, () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;
  router.get('/', async (request, response, next) => {
    try {
      const topSpeakers = await speakersService.getList();
      const artWork = await speakersService.getAllArtwork();
      return response.render('layout/index', {
        pageTitle: 'Welcome',
        template: 'index',
        topSpeakers,
        artWork,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};

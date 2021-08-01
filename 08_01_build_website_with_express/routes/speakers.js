const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const speakers = await speakersService.getList();
      const artWork = await speakersService.getAllArtwork();
      return response.render('layout/index', {
        pageTitle: 'Speakers',
        template: 'speakers',
        speakers,
        artWork,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.get('/:shortname', async (request, response, next) => {
    try {
      const speaker = await speakersService.getSpeaker(request.params.shortname);
      const artWork = await speakersService.getArtworkForSpeaker(request.params.shortname);
      return response.render('layout/index', {
        pageTitle: 'Speaker',
        template: 'speaker-detail',
        speaker,
        artWork,
      });
    } catch (err) {
      return next(err);
    }
  });

  return router;
};

// ------------------------- //
// ----- songRoutes.js ----- //
// ------------------------- //


const router = require('express').Router()
const { Song } = require('../../models');



// CREATE new post
router.post('/', async (req, res) => {
    try {
      const dbSongData = await Song.create({
        song_name: req.body.song_name,
        artist_name: req.body.artist_name,
        // password: req.body.password,
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  
    //     res.status(200).json(dbSongData);
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;
    
// ------------------------- //
// ----- songRoutes.js ----- //
// ------------------------- //


const router = require('express').Router()
const { Song } = require('../../models');
const withAuth = require('../../utils/auth');



// Create new post
router.post('/', withAuth, async (req, res) => {
    try {
      const newSong = await Song.create({
        ...req.body,
        song_name: req.session.song_name,
        artist_name: req.session.artist_name,
      });
  
      res.status(200).json(newSong);
    } catch (err) {
      res.status(400).json(err);
    }
  });




// // CREATE new post
// router.post('/', async (req, res) => {
//     try {
//       const dbSongData = await Song.create({
//         song_name: req.body.song_name,
//         artist_name: req.body.artist_name,
//         // password: req.body.password,
//       });
  
//       // Set up sessions with a 'loggedIn' variable set to `true`
//     //   req.session.save(() => {
//     //     req.session.loggedIn = true;
  
//         res.status(200).json(dbSongData);
//     //   });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


module.exports = router;
    
// ------------------------- //
// ----- songRoutes.js ----- //
// ------------------------- //


const router = require('express').Router();
const Song = require('../../models/Song');
// const withAuth = require('../../utils/auth');



// route to create/add a song using async/await -v3
router.post('/', async (req, res) => {
    try {
        const songData = await Song.create({
            song_name: req.session.song_name,
            artist_name: req.session.artist_name,
        });
        // if the song is successfully created, the new response will be returned as json
        req.session.save(() => {
            res.status(200).json(songData)
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});




// // Create new post -v2
// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newSong = await Song.create({
//         ...req.body,
//         song_name: req.session.song_name,
//         artist_name: req.session.artist_name,
//       });

//       res.status(200).json(newSong);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });




// // CREATE new post -v1
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

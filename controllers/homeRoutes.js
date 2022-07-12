// ------------------------- //
// ----- homeRoutes.js ----- //
// ------------------------- //


const router = require('express').Router()
// const Song = require('../models/song.js');
const Song = require('../models/Song');


// GET all songs 
router.get('/', async (req, res) => {
    const songData = await Song.findAll()
    console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

    res.render('post', { songs });
    // res.json(songs);
});


router.get('/add-song', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('all', {songs});
        // res.json(songs);
});
// //GET a single song
// router.get('/:id', (req, res) => {
//     Song.findByPk(req.params.id).then((songData) =>{
//         res.json(songData)
//     });
// });


// LOGIN function
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login');
  });



// // LOGOUT function
// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     } else {
//       res.status(404).end();
//     }  
// });    

module.exports = router;

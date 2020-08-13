const router = require('express').Router();

const VoteTbl = require('../../models/voteModel.js');

router.post('/', (req, res) => {
  const decoded = req.decodedToken;

  const { djId } = req.decodedToken;
  const { trackId } = req.body;

  VoteTbl.checkIfVoteExists(djId, trackId)
    .then(existingTrack => {
      if (existingTrack) {
        VoteTbl.deleteVote(existingTrack.dj_id, existingTrack.track_id)
          .then(deletedVote => {
            console.log('deletedVote: ', deletedVote);
            res.json(`deleted ${deletedVote} vote`);
          })
          .catch(err => res.status(500).json(err));
      } else {
        VoteTbl.addVote(djId, trackId)
          .then(response => {
            console.log('res from vote: ', response);
            res.json(response);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;

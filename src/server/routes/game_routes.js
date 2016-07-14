import GameDB from '../gamedb'
import TeamDB from '../teamdb'


module.exports = function(gamesRouter, db){

  var gamedb = new GameDB(db);
  var teamdb = new TeamDB(db);

  gamesRouter.route('/new')
    .get(function(req, res){
        console.log('new game request');
        teamdb.list((rows) => {res.send({teams:rows, rows: [{}]})});
    })

  gamesRouter.route('/:id')
    .get(function(req, res){
      console.log('get game request');
      gamedb.get(req.params.id, (rows) => {teamdb.list((teams) => {res.send({teams:teams, rows:rows})})})
    })
    .patch(function(req, res){
      console.log('update game request');
      if (req.body.id){
          gamedb.update(req.params.id, req.body.data);
      }
      gamedb.list((rows) => {res.send(rows)});
    })
    .delete(function(req, res){
      if (req.params.id){
        gamedb.destroy(req.params.id);
      }
      res.send({result: 'OK'});
    });


  gamesRouter.route('/')
    .get(function(req, res){
      console.log('list games request');
      gamedb.list( (rows) => {res.send(rows)} );
    })
    .post(function(req, res){
        console.log('create game request');
        var id = gamedb.create(req.body, (id) => {
            console.log(id);
          res.send({id: id})
        });
    });

}

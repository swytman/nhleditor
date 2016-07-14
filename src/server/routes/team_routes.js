import TeamDB from '../teamdb'

module.exports = function(app, db){

  var teamdb = new TeamDB(db);
  // list teams
  app.get('/api/teams', function(req, res){
      console.log('list teams request');
      teamdb.list( (rows) => {res.send(rows)} );
  });

  // create team
  app.post('/api/teams', function(req, res){
    console.log('create team request');
    teamdb.create(req.body);
    teamdb.list((rows) => {res.send(rows)});
  });

  // update team
  app.patch('/api/teams/:id', function(req, res){
    console.log('update team request');
    if (req.body.id){
        teamdb.update(req.body);
    }
    teamdb.list((rows) => {res.send(rows)});
  })

  // delete team
  app.delete('/api/teams/:id', function(req, res){
    if (req.params.id){
      teamdb.delete(req.params.id);
    }
    teamdb.list((rows) => {res.send(rows)});
  });

}


export default class TeamDB  {

  constructor(db) {
    this.db = db;
    db.serialize(function() {
      db.run("CREATE TABLE if not exists teams (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT)");
    });
    console.log('Team table init');
  }

  list(callback){
    console.log('List teams');
    this.db.all("SELECT * FROM teams", (err, rows) => {
        callback(rows);
    });
  }

  update(team){
    console.log('Update team ' + team.id);
    var sql = "UPDATE teams  SET title = '" + team.title + "' WHERE id = " + team.id;
    this.db.run(sql);
  }

  create(team){
    console.log('Create team ' + team.title);
    var sql = "INSERT INTO teams (title) VALUES ('" + team.title + "')"
    this.db.run(sql);
  }

  delete(id) {
    console.log('Delete team ') + id;
    var sql = "DELETE FROM teams WHERE id = " + id;
    this.db.run(sql);
  }

}

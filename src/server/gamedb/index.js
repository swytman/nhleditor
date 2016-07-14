const DEFAULT_GAME = {
    home_disq: 0,
    home_fast: 0,
    home_first: 0
}


export default class GameDB  {

  constructor(db) {
    this.db = db;
    db.serialize(function() {
      db.run(`CREATE TABLE if not exists games
         (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          date NUMERIC,
          home_id INTEGER,
          guest_id INTEGER,
          season INTEGER,
          status INTEGER,

          home_score_1 INTEGER,
          home_score_2 INTEGER,
          home_score_3 INTEGER,
          home_score_ot INTEGER,
          home_score_b INTEGER,
          home_score_total TEXT,
          home_fast BOOL,
          home_first BOOL,
          home_pp_goals INTEGER,
          home_penalty_1 INTEGER,
          home_penalty_2 INTEGER,
          home_penalty_3 INTEGER,
          home_penalty_ot INTEGER,
          home_disq BOOL,
          home_shots_1 INTEGER,
          home_shots_2 INTEGER,
          home_shots_3 INTEGER,
          home_shots_ot INTEGER,
          home_shots_total INTEGER,

          guest_score_1 INTEGER,
          guest_score_2 INTEGER,
          guest_score_3 INTEGER,
          guest_score_ot INTEGER,
          guest_score_b INTEGER,
          guest_score_total TEXT,
          guest_fast BOOL,
          guest_first BOOL,
          guest_pp_goals INTEGER,
          guest_penalty_1 INTEGER,
          guest_penalty_2 INTEGER,
          guest_penalty_3 INTEGER,
          guest_penalty_ot INTEGER,
          guest_disq BOOL,
          guest_shots_1 INTEGER,
          guest_shots_2 INTEGER,
          guest_shots_3 INTEGER,
          guest_shots_ot INTEGER,
          guest_shots_total INTEGER)
          `);
    });
    console.log('game table init');
  }

  list(callback){
    console.log('List games');
    this.db.all(`SELECT t1.title as home, t2.title AS guest, games.* FROM games
        JOIN teams t1 ON games.home_id = t1.id
        JOIN teams t2 ON games.guest_id = t2.id`, (err, rows) => {
        callback(rows);
    });
    console.log('request finish');
  }

  update(id, game){
    console.log('Update game ' + id);
    let update_opt = [];

    game = {... DEFAULT_GAME, ... game}
    console.log(game);
    for (let [k,v] of Object.entries(game)) {
        update_opt.push(`${k} = \"${v}\"`);
    }
    update_opt = update_opt.join(', ');
    var sql = `UPDATE games  SET ${update_opt} WHERE id = ${id}`;
    console.log(sql)
    this.db.run(sql);
  }

  get(id, callback){
    console.log('Get game ' + id);
    this.db.all("SELECT * from games WHERE id = " + id, (err, rows) => {
        callback(rows);
    });
  }

  create(game, callback){
    console.log('Create game ');
    let keys = Object.keys(game.data).join(', ');
    let values = Object.values(game.data).map(v => "'"+v+"'").join(', ');
    var sql = `INSERT INTO games (${keys}) VALUES (${values})`
    console.log(sql);
    this.db.run(sql, [], function (err){
        if(err){
            callback('new');
        } else {
            callback(this.lastID)
        }
    });
  }

  destroy(id) {
    console.log('Delete game ') + id;
    var sql = "DELETE FROM games WHERE id = " + id;
    this.db.run(sql);
  }

}

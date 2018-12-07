import knex from 'knex';
import knexdb from '../knexdb';

const knexConfig = knex(knexdb);

class User {
  static async getAllDriver() {
    // using query
    // const GET_DRIVER = "SELECT * FROM drivertb";
    // let results = await knexConfig.raw(GET_DRIVER);

    // kex :qery builder

    //select * from  table
    let results = await knexConfig('usertb');

    return results;
  }
  static async getDriverById(id) {
    // select * from table where id=1
    let results = await knexConfig('usertb').where('id', id);

    return results;
  }

  /**
   * Fetch user detail from database.
   *
   * @params (userdetail) object
   * @returns Promise<object>
   */
  static async getUserDetail(username) {
    // select * from table where id=1
    return await knexConfig('usertb').where('username', username);
  }

  static async postAllDriver(data) {
    // using query
    // const GET_DRIVER = "SELECT * FROM drivertb";
    // let results = await knexConfig.raw(GET_DRIVER);

    // kex :qery builder

    //select * from  table
    // let results = await knexConfig("drivertb");

    // select * from table where id=1
    // let results = await knexConfig("drivertb").where("id", id);

    // insert into table
    // let results = await knexConfig("drivertb").insert({
    //   name: "mina",
    //   address: "bhk"
    // });

    return await knexConfig('usertb').insert(data);
  }
}

export default User;

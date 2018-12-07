exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("usertb")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("usertb").insert([
        { username: "ram", email: "ktm@asc.com", password: "acc" }
      ]);
    });
};

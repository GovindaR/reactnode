exports.up = (knex, Promise) => {
  return knex.schema.createTable('usertb', table => {
    table.increments('id').primary();
    table.text('username').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.timestamp('inseted_at').default(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usertb');
};

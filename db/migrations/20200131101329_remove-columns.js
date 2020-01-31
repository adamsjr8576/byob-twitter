
exports.up = function(knex) {
  return knex.schema
    .table('users', table => {
      table.dropColumn('user_id');
      table.dropColumn('user_created_at');
    })
    .table('posts', table => {
      table.dropColumn('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', table => {
      table.integer('user_id');
      table.string('user_created_at')
    })
    .table('users', table => {
      table.integer('id');
    })
};

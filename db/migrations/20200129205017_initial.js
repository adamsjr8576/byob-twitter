
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary;
      table.integer('user_id');
      table.string('user_name');
      table.string('user_screen_name');
      table.string('user_description');
      table.string('user_location');
      table.string('user_created_at');

      table.timestamps(true, true);
    })
    .createTable('posts', table => {
      table.increments('post_id').primary;
      table.string('created_at');
      table.integer('id');
      table.integer('retweet_count');
      table.integer('favorite_count');
      table.string('full_text');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.user_id');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('posts')
    .dropTable('users')
};

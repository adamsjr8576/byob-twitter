
exports.up = function(knex) {
  return knex.schema.alterTable('posts', table => {
     table.text('full_text').alter();
});
};

exports.down = function(knex) {
  return knex.schema.table('post', function(table) {
    table.dropColumn('full_text');
  })
};

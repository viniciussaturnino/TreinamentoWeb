
exports.up = function(knex) {
  return knex.schema.createTable('flights', function(table) {
      table.increments();

      table.string('destiny').notNullable();
      // then we will join de atributes date and hour, using table.date(), table.datetime() or table.timestamp()
      table.string('date').notNullable();
      table.string('hour').notNullable();
      table.decimal('value').notNullable();

      table.string('airline_id').notNullable();

      table.foreign('airline_id').references('id').inTable('airlines');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('flights');
};

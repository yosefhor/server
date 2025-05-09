/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
        table.timestamps(true, true)
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
*/
export function down(knex) {
    return knex.schema.dropTable('users')

}

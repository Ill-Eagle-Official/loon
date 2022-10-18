/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, name: 'Great Blue Heron', image_url: 'https://www.allaboutbirds.org/guide/assets/photo/60314201-480px.jpg', video_url: 'https://www.youtube.com/watch?v=droo7sFCuIQ', is_sky: true},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};

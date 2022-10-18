/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, name: 'Great Blue Heron', image_url: 'https://www.allaboutbirds.org/guide/assets/photo/60314201-480px.jpg', video_url: 'https://www.youtube.com/watch?v=droo7sFCuIQ', is_sky: true},
    {id: 2, name: 'Bald Eagle', image_url: 'https://www.allaboutbirds.org/guide/assets/photo/60328971-480px.jpg', video_url: 'https://www.youtube.com/watch?v=BEgEIEfSuvU' , is_sky: true},
    {id: 3, name: 'Osprey', image_url: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/60320581/1800', video_url: 'https://www.youtube.com/watch?v=428L7cR4AMU' , is_sky: true},
    {id: 4, name: 'Beaver', image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg', video_url: 'https://www.youtube.com/watch?v=oL5SD6z7AG8' , is_land: true},
    {id: 5, name: 'Moose', image_url: 'https://canadiangeographic.ca/wp-content/uploads/2019/06/35879286-O_Boy__A_Double_Date-1-1024x683.jpg', video_url: 'https://www.youtube.com/watch?v=9MUCQwW2W7k', is_land: true},
    {id: 6, name: 'Black Bear', image_url: 'https://cdn.britannica.com/17/235817-050-97A76099/American-black-bear-ursus-americanus-standing-stream-British-Columbia-Canada.jpg', video_url: 'https://www.youtube.com/watch?v=hDiKSdfyVTo', is_land: true},
    {id: 7, name: 'Sockeye Salmon', image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Sockeye_salmon_swimming_right.jpg', video_url: 'https://www.youtube.com/watch?v=T7zj2f7oStw', is_sea: true},
    {id: 8, name: 'Orca', image_url: 'https://i.cbc.ca/1.6201135.1633481213!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/orca-study-ubc.jpg', video_url: 'https://www.youtube.com/watch?v=pEP0sMO-nUQ', is_sea: true},
    {id: 9, name: 'Painted Turtle', image_url: 'https://spca.bc.ca/wp-content/uploads/2022/05/western-painted-turtle-on-log-credit-Tracey-Thomas.jpg', video_url: 'https://www.youtube.com/watch?v=Az_2M-uaHCU', is_sea: true},
  ]);
};

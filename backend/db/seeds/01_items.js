/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    // sky animals
    {id: 1, name: 'Great Blue Heron', image_url: 'https://www.allaboutbirds.org/guide/assets/photo/60314201-480px.jpg', video_url: 'https://www.youtube.com/watch?v=droo7sFCuIQ', is_sky: true},
    {id: 2, name: 'Bald Eagle', image_url: 'https://www.allaboutbirds.org/guide/assets/photo/60328971-480px.jpg', video_url: 'https://www.youtube.com/watch?v=BEgEIEfSuvU' , is_sky: true},
    {id: 3, name: 'Osprey', image_url: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/60320581/1800', video_url: 'https://www.youtube.com/watch?v=428L7cR4AMU' , is_sky: true},
    {id: 11, name: 'Mallard', image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg', video_url: 'https://www.youtube.com/watch?v=RxT80Z_MiWo', is_sky: true, is_sea: true},
    {id: 14, name: 'California Quail', image_url: 'https://www.allaboutbirds.org/guide/assets/photo/296733361-480px.jpg', video_url: 'https://www.youtube.com/watch?v=HHLOeNT511E', is_sky: true, is_land: true},
    {id: 15, name: "Anna's Hummingbird", image_url: 'https://images.squarespace-cdn.com/content/v1/52dfe27be4b065c6bc90b4b5/1597164959152-P0IOCJ2XSAWN8RO02F5L/annas-hummingbird-male-bird-1140x1140-dQQVwnvE8.jpeg?format=1000w', video_url: 'https://www.youtube.com/watch?v=jL8yxW52Axc', is_sky: true},
    {id: 17, name: 'Common Raven', image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/3782_Common_Raven_in_flight.jpg', video_url: 'https://www.youtube.com/watch?v=tJcuKcfz8qY', is_sky: true},
    {id: 20, name: 'Great Horned Owl', image_url: 'https://www.hww.ca/kaboom/images/Birds/Great-Horned-Owl.jpg', video_url: 'https://www.youtube.com/watch?v=L5GoUyVwxOw', is_sky: true},
    
    // land animals
    {id: 4, name: 'Beaver', image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg', video_url: 'https://www.youtube.com/watch?v=oL5SD6z7AG8' , is_land: true},
    {id: 5, name: 'Moose', image_url: 'https://canadiangeographic.ca/wp-content/uploads/2019/06/35879286-O_Boy__A_Double_Date-1-1024x683.jpg', video_url: 'https://www.youtube.com/watch?v=9MUCQwW2W7k', is_land: true},
    {id: 6, name: 'Black Bear', image_url: 'https://cdn.britannica.com/17/235817-050-97A76099/American-black-bear-ursus-americanus-standing-stream-British-Columbia-Canada.jpg', video_url: 'https://www.youtube.com/watch?v=hDiKSdfyVTo', is_land: true},
    {id: 10, name: 'Raccoon', image_url: 'https://www.ndow.org/wp-content/uploads/2021/10/Family-of-Raccoons.jpg', video_url: 'https://www.youtube.com/watch?v=1lViKrWgTYk', is_land: true},
    {id: 12, name: 'Coyote', image_url: 'https://cdn.britannica.com/45/125545-050-B705597E/Coyote.jpg', video_url: 'https://www.youtube.com/watch?v=vOvrk54ftMM', is_land: true},
    {id: 13, name: 'Mule Deer', image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Mule_buck_elk_creek_m_myatt_%285489214303%29.jpg', video_url: 'https://www.youtube.com/watch?v=h8DweS5Z684', is_land: true},
    {id: 16, name: 'Rattlesnake', image_url: 'https://i.natgeofe.com/k/7f52bf68-4538-4195-894c-342bd89b187d/rattlesnake-tongue_3x2.jpg', video_url: 'https://www.youtube.com/watch?v=sKh5K1z1i7U', is_land: true},
    {id: 18, name: 'Gray Wolf', image_url: 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg', video_url: 'https://www.youtube.com/watch?v=VYKsI5ILiaQ', is_land: true},
    {id: 19, name: 'Zombie Mushroom', image_url: 'https://learn.freshcap.com/wp-content/uploads/2020/12/does-cordyceps-grow-on-bugs-1.png', video_url: 'https://www.youtube.com/watch?v=XuKjBIBBAL8', is_land: true},

    
    // sea animals
    {id: 7, name: 'Sockeye Salmon', image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Sockeye_salmon_swimming_right.jpg', video_url: 'https://www.youtube.com/watch?v=T7zj2f7oStw', is_sea: true},
    {id: 8, name: 'Orca', image_url: 'https://i.cbc.ca/1.6201135.1633481213!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/orca-study-ubc.jpg', video_url: 'https://www.youtube.com/watch?v=pEP0sMO-nUQ', is_sea: true},
    {id: 9, name: 'Red-Eared Slider Turtle', image_url: 'https://www.japantimes.co.jp/wp-content/uploads/2016/04/n-turtle-a-20160427.jpg', video_url: 'https://www.youtube.com/watch?v=tFlT4vZdVT4', is_sea: true},
    {id: 21, name: 'Red Sea Urchin', image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Strongylocentrotus_franciscanus.jpg', video_url: 'https://www.youtube.com/watch?v=aTaHjh1DRGw', is_sea: true},
    {id: 22, name: 'Abalone', image_url: 'https://asianinspirations.com.au/wp-content/uploads/2018/12/Abalone-Live.jpg', video_url: 'https://www.youtube.com/watch?v=A2M1yKm_x1M', is_sea: true}
  ]);
};

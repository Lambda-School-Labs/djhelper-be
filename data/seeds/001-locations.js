
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          address_line_1: "4441 Collins Ave", 
          address_line_2: "", 
          city: "Miami Beach", 
          state: "FL", 
          zip: '33140'
        },
        {
          address_line_1: "Dubai Marina", 
          address_line_2: "Skydive Dubai Drop Zone - King Salman Bin Abdulaziz Al Saud St", 
          city: "Dubai", 
          state: "United Arab Emirates", 
          zip: '00000'
        },
        {
          address_line_1: "Taganskaya St.", 
          address_line_2: " 29/1", 
          city: "Moscow", 
          state: "Russia", 
          zip: '00000'
        }
      ]);
    });
};

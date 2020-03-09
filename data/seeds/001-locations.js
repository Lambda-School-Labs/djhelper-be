
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
          zip: '33140',
          name: "Club Liv",
          phone: "305 674 4680",
          website: "https://www.livnightclub.com",
          email: "REFUNDS@LIVNIGHTCLUB.COM"
        },
        {
          address_line_1: "Dubai Marina", 
          address_line_2: "Skydive Dubai Drop Zone - King Salman Bin Abdulaziz Al Saud St", 
          city: "Dubai", 
          state: "United Arab Emirates", 
          zip: '00000',
          name: "Zero Gravity",
          phone: "+971 4 399 0009",
          website: "https://www.0-gravity.ae/",
          email: "info@0-gravity.ae"
        },
        {
          address_line_1: "Ulitsa Bol'shaya Dmitrovka", 
          address_line_2: "32", 
          city: "Moscow", 
          state: "Russia", 
          zip: '00000',
          name: "Einstein Lounge",
          phone: "+7 968 459-22-10",
          website: "https://www.facebook.com/bar.KotShredingera",
          email: "N/A"
        }
      ]);
    });
};

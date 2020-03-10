
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
          email: "REFUNDS@LIVNIGHTCLUB.COM",
          img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F599decabf5e231e0deddae69%2F59cc1818f43b5598696280b6%2F5a00bd7753450a19bb603e41%2F1509997965638%2FIMG_8977.jpg&f=1&nofb=1"
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
          email: "info@0-gravity.ae",
          img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timeoutdubai.com%2Fsites%2Fdefault%2Ffiles%2Ftod%2Fstyles%2Ffull_img%2Fpublic%2Fimages%2F2018%2F10%2F04%2Fzero_gravity_2.jpg%3Fitok%3D-UvqZPK-&f=1&nofb=1"
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
          email: "N/A",
          img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0d%2F04%2F0b%2Fb8%2Fcaption.jpg&f=1&nofb=1"
        }
      ]);
    });
};

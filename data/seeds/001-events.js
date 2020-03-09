
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          name: "Miami Nights", 
          date:  "2020-01-12",
          start_time: "12:00:00",
          end_time: "12:30:01",
          event_type: "Club",
          description: "Miami's hottest night club event of 2020 at Club LIV, book now before we are sold out!",
          img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funitedwaymiami.org%2Fwp-content%2Fuploads%2F2017%2F02%2Fpic-of-liv-nightclub-confetti.jpg&f=1&nofb=1"

        },
        {
          name: "Pool Party by the Sea", 
          date:  "2020-02-12",
          start_time: "12:00:00",
          end_time: "12:30:01",
          event_type: "Pool",
          description: "Duabi's hottest beach club event of 2020 at Zero Gravity, book now before we are sold out!",
          img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FagXbcf4xu0w%2Fmaxresdefault.jpg&f=1&nofb=1"

        },
        {
          name: "Night at Schrödinger's Cat", 
          date:  "2020-02-12",
          start_time: "12:00:00",
          end_time: "12:30:01",
          event_type: "Bar",
          description: "Moscow's hottest night club event of 2020 at Schrödinger's cat, book now before we are sold out!",
          img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Cvrf8qjMW9ScdMJE32FGOAHaE8%26pid%3DApi&f=1"

        }
      ]);
    });
};

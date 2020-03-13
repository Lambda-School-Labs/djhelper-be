
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          name: 'Bill and Grace',
          event_type: 'wedding',
          description: 'A traditional, peaceful wedding.',
          date: '2020-04-10',
          start_time: '14:00',
          end_time: '20:00',
          location_id: 1,
          img_url:
            'https://images.unsplash.com/photo-1508219803418-5f1f89469b50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          location_id: 2,
          name: 'Ellie and Mona',
          event_type: 'wedding',
          description: 'A more modern, fun wedding.',
          date: '2020-07-14',
          start_time: '16:00',
          end_time: '22:00',
          img_url:
            'https://images.unsplash.com/photo-1561928070-590b9c48f0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Charles and Elizabeth',
          event_type: 'wedding',
          description: 'A senior wedding.',
          date: '2020-03-30',
          location_id: 3,
          imgUrl:
            'https://images.unsplash.com/photo-1532329683184-6ffd13057d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Chris and Kat',
          event_type: 'wedding',
          description: 'Very atmospheric and sentimental wedding.',
          date: '2020-06-10',
          location_id: 4,
          img_url:
            'https://images.unsplash.com/photo-1494859632785-32abaf5241f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          location_id: 5,
          name: "Elsa's 50th Birthday Gala",
          event_type: 'birthday',
          description:
            'Lots of friends and family to celebrate a very important lady',
          date: '2020-04-18',
          img_url:
            'https://images.unsplash.com/photo-1567768823253-c4fe2bf7143e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Devin's D&D Event",
          event_type: 'game night',
          description: 'All-Night Extreme Game Night',
          date: '2020-05-20',
          location_id: 6,
          img_url:
            'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Derion and Tariya's Wedding",
          event_type: 'wedding',
          description: 'A festive wedding celebration with dancing',
          date: '2019-12-10',
          start_time: '19:00',
          end_time: '23:59',
          location_id: 10,
          image_url:
            'https://images.unsplash.com/photo-1545826394-68be0015475b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Jess and Roman's Wedding",
          event_type: 'wedding',
          description: 'Come and celebrate with family, friends, and festivities.',
          date: '2019-01-10',
          start_time: '11:00',
          end_time: '16:00',
          location_id: 11,
          image_url:
            'https://images.unsplash.com/photo-1549335223-c89505707f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Timpanogas High School Preference Dance',
          event_type: 'dance',
          description: "Semi-formal, girls' choice dance",
          date: '2020-02-05',
          location_id: 12,
          image_url:
            'https://images.unsplash.com/photo-1565734777784-6e89609ed871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Dora's Quinceañera",
          event_type: 'quinceañera',
          description: "Feast and dance in honor of Dora's 15th birthday!",
          date: '2020-03-01',
          location_id: 13,
          image_url:
            'https://images.unsplash.com/photo-1549981118-d720d448ab86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Emily & Gael's Taco Party",
          event_type: 'party',
          description:
            'Couple is fairly young, so audience may consist of primarily young friends and older family members.',
          date: '2019-05-05',
          location_id: 14,
          image_url:
            'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'DarkWings Night Club',
          event_type: 'party',
          description: 'Late night full moon celebration party',
          date: '2020-03-05',
          location_id: 15,
          image_url:
            'https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
      
        {
          name: 'Soap Lake School Homecoming Dance',
          event_type: 'dance',
          description: 'Semi-formal event with an Under-the-Sea theme',
          date: '2019-10-01',
          location_id: 16,
          image_url:
            'https://images.unsplash.com/photo-1516970739312-08b075784b71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Kristina & Bryce's Wedding",
          type: 'wedding',
          description:
            'Couple is fairly young, so audience may consist of primarily young friends and older family members.',
          date: '2019-02-28',
          location_id: 11,
          image_url:
            'https://images.unsplash.com/photo-1459259191495-52eccde892c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: "Amy's Wedding",
          event_type: 'wedding',
          description: 'Casual event at a senior center',
          date: '2020-01-24',
          start_time: '13:00',
          end_time: '18:00',
          location_id: 17,
          image_url:
            'https://images.unsplash.com/photo-1500900173725-e0978c945e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
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
          description: "Dubai's hottest beach club event of 2020 at Zero Gravity, book now before we are sold out!",
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

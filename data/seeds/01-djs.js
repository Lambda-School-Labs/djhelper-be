exports.seed = function(knex) {
  return (
    knex('djs')
      // .truncate()
      .then(function() {
        return knex('djs').insert([
          {
            id: 1,
            username: 'andy2',
            password:
              '$2a$10$LW6zA8Uxkq3Z7AXjZusk6uz0uR2KAA/kDtHIr25FNfaRM4dgZZaYi',
            name: 'Andy G',
            email: 'jash@gmail.com',
            phone: '34525234',
            website: '',
            bio: 'Password: andy2',
            profile_pic_url: ''
          },
          {
            id: 2,
            username: 'joe3',
            password:
              '$2a$10$hsbwUU/M6n/x687QfDORlO4D6XxU83fcpQUKrWbao/IVp/a8E8B0i',
            name: 'Joey M',
            email: '1reuhyg@gmail.com',
            phone: '54678678',
            website: '',
            bio: 'Password: joe3',
            profile_pic_url: ''
          },
          {
            id: 3,
            username: '5toNy',
            password:
              '$2a$10$.5Y3RDzKb9ZBQlbs.F07Iei//hLmHCRdwlLohxLBlpYMtULT2Foqm',
            name: 'Tony Tommy',
            email: 'sjkdfh8@gmail.com',
            phone: '67897804',
            website: '',
            bio: 'Password: 5toNy',
            profile_pic_url: ''
          },
          {
            id: 4,
            username: 'fox6',
            password:
              '$2a$10$NsLm.MLxDS/llVJOQIj0/eHrQnacAe4se.gTwOdKhA4WdxvBwu0Cy',
            name: 'DJ Fox 6',
            email: 'fox6@gmail.com',
            phone: '',
            website: '',
            bio: '',
            profile_pic_url:
              'https://images.unsplash.com/photo-1582280516732-87e776e3cafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          }
        ]);
      })
  );
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dj-login")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dj-login").insert([
        {
          username: "andy2",
          password:
            "$2a$10$LW6zA8Uxkq3Z7AXjZusk6uz0uR2KAA/kDtHIr25FNfaRM4dgZZaYi",
          name: "Andy G",
          email: "jash@gmail.com",
          phone: "34525234",
          website: "",
          bio: "Password: andy2",
          profile_pic_url: ""
        },
        {
          username: "joe3",
          password:
            "$2a$10$hsbwUU/M6n/x687QfDORlO4D6XxU83fcpQUKrWbao/IVp/a8E8B0i",
          name: "Joey M",
          email: "1reuhyg@gmail.com",
          phone: "54678678",
          website: "",
          bio: "Password: joe3",
          profile_pic_url: ""
        },
        {
          username: "5toNy",
          password:
            "$2a$10$.5Y3RDzKb9ZBQlbs.F07Iei//hLmHCRdwlLohxLBlpYMtULT2Foqm",
          name: "Tony Tommy",
          email: "sjkdfh8@gmail.com",
          phone: "67897804",
          website: "",
          bio: "Password: 5toNy",
          profile_pic_url: ""
        }
      ]);
    });
};

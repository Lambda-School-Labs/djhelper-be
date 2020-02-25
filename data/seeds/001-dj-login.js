exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dj-login")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dj-login").insert([
        {
          username: "andy2",
          password: "asfd5t",
          name: "Andy G",
          email: "jash@gmail.com",
          phone: "34525234",
          website: "",
          bio: "",
          profile_pic_url: ""
        },
        {
          username: "joe3",
          password: "asdf5tg",
          name: "Joey M",
          email: "1reuhyg@gmail.com",
          phone: "54678678",
          website: "",
          bio: "",
          profile_pic_url: ""
        },
        {
          username: "5toNy",
          password: "s768idf",
          name: "Tony Tommy",
          email: "sjkdfh8@gmail.com",
          phone: "67897804",
          website: "",
          bio: "",
          profile_pic_url: ""
        }
      ]);
    });
};

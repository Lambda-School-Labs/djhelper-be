🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be completed by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### Backend deployed at [AWS](https://ec2-18-218-74-229.us-east-2.compute.amazonaws.com) <br>

Note: We are hoping to change this to https://api.dj-helper.com/

## Getting started

To get the server running locally:

- Clone this repo
- `npm i` to install all required dependencies
- `npm server` to start the local server
- `npm test` to start server using testing environment

The server requires a PostgreSQL database to be running and configured in a `.env` file.

### Backend framework goes here

🚫 Why did you choose this framework?
(npm, NodeJS, express, PostgreSQL...)?

- Point One
- Point Two
- Point Three
- Point Four

## 2️⃣ Endpoints

#### Onboarding Routes

These routes do **_not_** require a JSON token in the header.

| Method | Endpoint          | Access Control | Description                  |
| ------ | ----------------- | -------------- | ---------------------------- |
| POST   | `/login/dj`       | none           | Login for an existing DJ.    |
| POST   | `/login/guest`    | none           | Login for an existing guest. |
| POST   | `/register/dj`    | none           | Create a new DJ.             |
| POST   | `/register/guest` | none           | Create a new guest.          |

#### Public Information Routes

These routes do **_not_** require a JSON token in the header.
| Method | Endpoint | Access Control | Description |
| ------ | ------------ | -------------- | ------------------------------- |
| GET | `/dj/:id` | none | Get information about a DJ. |
| GET | `/event/:id` | none | Get information about an event. |

#### DJ Routes

| Method | Endpoint       | Access Control      | Description                            |
| ------ | -------------- | ------------------- | -------------------------------------- |
| GET    | `/auth/dj/:id` | all users           | Returns info for the logged in DJ.     |
| PUT    | `/auth/dj/:id` | owners, supervisors | Returns all users for an organization. |
| DELETE | `/auth/dj/:id` | owners, supervisors | Returns info for a single user.        |

# Data Model

#### DJs

---

```
{
  id: INTEGER
  username: STRING
  password: STRING
  name: STRING
  email: STRING
  phone: STRING
  website: STRING
  bio: STRING
  profile_pic_url: STRING
}
```

#### Guests

---

```
{
  id: INTEGER
  username: STRING
  password: STRING
  email: STRING
}
```

#### Events

TODO: Update this section

---

```
{
  id: INTEGER
  dj: INTEGER
  event_name: STRING
  address: STRING
  email: STRING
  phone: STRING
  map_url: STRING
  start_time: DATETIME (or int)
  end_time: DATETIME (or int)
  venue_url: STRING
  venue_phone: STRING
}
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a `.env` file that includes the following:

```
PORT - optional port number for this app. Defaults to 6000.
USE_HTTPS - set to "true" if using https. Place SSL/TLS certificate under /cert.

DB_HOSTNAME - e.g. "localhost".
PG_DATABASE_NAME - Name of the database.
PG_PORT - Postgres port number. Defaults to 5432.
PG_USER - Postgres database username.
PG_PASSWORD - Postgres database user's password.
```

TODO:

- Separate variables for development, staging, test, and production.
- Add these fields:
  - JWT\*SECRET - you can generate this by using a python shell and running
  ````py
  import random
  .join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-\_=+)') for i in range(50)])```
  ````

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/djhelper-fe) for details on the frontend of this project.

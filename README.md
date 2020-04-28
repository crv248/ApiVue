# ApiVue Project

Project that uses docker to allow a backend with Symfony 5 that provides an API using API platform and frontend with Vue.js that uses the data of the API using Quasar Framework.


## Launch

Once the project has been cloned, we execute the following command to start the server:
```
docker-compose up -d
```

To access the list of registered users you need to go to the route /admin. 
The test user is:
```
email: admin@admin.com
password: adminadmin
```


To start the client app we need to go to app/front and run this command that initiates quasar:
```
quasar dev
```

## Routes on the client
- /users/view -> list of users
- /users/login -> component that check of the credentials are corrects --> TO DO: make an authentication system
- /users/create -> new user creation form
- /users/show/{id} -> user data
- /users/edit/{id} -> edit user

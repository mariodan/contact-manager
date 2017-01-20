Contact Manager backend api v1.0
===============

Repo: https://github.com/mariodan/contact-manager




Env requirements
----------
- set-up your environment with:
* node.js >=4
* nvm - Node Version Manager
* npm - Node Package Manager
* pm2 - Process monitor


REST endpoints
---------------
- REST endpoints testing tool: Chrome Postman

* GET /api/contacts - get all contacts
* GET /api/contacts/:id - get contact by id
* POST /api/contact - adds a new contact
request.body:
```JSON
{
	"firstName": "testFirst",
	"lastName": "testLast",
	"email": "",
	"group": ""
}
```
* DELETE /api/contact - deletes a contact
* PUT /api/contact/:id - updates a contact by id
request.body:
```JSON
{
	"firstName": "testFirst",
	"lastName": "testLast",
	"email": "",
	"group": ""
}
```


Details:
----------
- end of time (EOT)...

How to run
-----------
- cd to project root
- run: **npm install** * (this process will take a while) *
- run either one of the followings:
 * npm start
 * node app.js
 * pm2 start --name "api" app.js
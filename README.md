# provok_assignment

# how to start
cd provok_assignment<br>
npm install<br>
nodemon start<br>
note - (please change config in connection.js)

# API
### test using postman (body - raw,json)

####  create posts
route - http://localhost:3000/create<br>
method - POST<br>
body - {
         "post":"post one",
         "userId":122
       }<br>
 
 
 #### to fetch all posts
route - http://localhost:3000/fetchAll<br>
method - GET<br>

 #### to fetch  post by Id
 route -  http://localhost:3000/fetchById/:1<br>
 method - GET<br>
 description - this end point fetch posts by id you provide in params
 
 #### to fetch  post by userId
 route - http://localhost:3000/fetchByUserId/1<br>
 method - GET<br>
 description - this end point fetch posts by userId you provide in params
 
 #### to update posts by id ( provide userId in param)
route - http://localhost:3000/update/123/1<br>
method - PUT<br>
body - {
         "post":"updated post"
     }<br>
description - this end point update post of Id you provide in params also check that userId is authorized for update or not
 

#### to delete post by Id ( provide userId in param)
route - http://localhost:3000/delete/123/1<br>
method - DELETE<br>
description - this end point delete post of Id you provide in params also check that userId is authorized for delete or not<br>



# about project
* project follows MVC pattern , to create model and for database i used sequelize ORM

 
 

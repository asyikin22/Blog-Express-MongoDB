# Creating a blog using Node.js, Express.js and MongoDB

# Dependencies

**These are the dependencies utilized in this little project, together with some explanation on their functionality:**

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/7469db53-9503-4eac-b45e-28e9d5a9f7a9)

# Glossaries

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/a72d6931-f15d-4d1e-a234-d22ca0b7a49c)


**The difference between app.set() and app.use()**:
* App.set() - It  is used for setting configuration settings and application-level variables
  1) It allows you to define global settings that affect the behavior of your application
  2) i.e. port number, view engine
 
* App.use() - It is used for mounting middleware functions at specific paths in the request-response cycle
  1) Middleware functions are functions that have access to the req object, res object and middleware function next
  2) They can perform tasks such as logging, parsing request bodies, authentication, and more.
 
# Establish connection to MongoDB

* Create a folder 'config' under 'server'
* Create a file called db.js
* Require mongoose, establishes connection to database using 'connectDB' functions, export the modules to main file
* Import module from db.js using require function
* Connect to database by calling connectDB()
* Check console to show successful connection message - showing database string

**Database Created**

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/187961e9-86c7-4b29-aac9-eccc97b02d06)

**This is how the blog app would look like once it's succesfully fetched data from MongoDB and rendered with EJS template**:
* It displays the title of blog post
* The time it's created

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/ba7ddbb2-c3d2-4871-9f09-41a8ac26df73)


# Issues

* These are the issues I encounter while working on this project and what I did to fix it
* This table will be updated periodically as I progress through this project.

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/366d0c49-392a-41cf-ba44-01cadb5ffe66)



  

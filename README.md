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
 
**The difference between cookies and session**

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/f72712f4-59de-4d76-9195-f2fdf656e066)

 
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


# AUTHENTICATION

* Check Login Credential

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/7e7703c6-12e5-4ef5-b7d2-03d3bb22f649)

**Cookies stored in Application (Web dev tool) - TOKEN**:
* This is the cookie that's keeping us logged in
* But if the cookie is deleted, nothing happens, so we need a guard that will log us out if the cookie is no longer there

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/52b23d7a-e2fc-4314-8887-18dc313e0595)

<br>

**Middleware to block unauthorized access if cookie is absent**
* This MW handles user authentication and authorization.
* It intercepts requests to the /dashboard route, checks whether the user is authenticated
* It allows access to the dashboard page only if the user is authenticated.
* If the user is not authenticated, it may redirect them to a login page or return an error response.
* We will mount the authMiddleware function to the /dashboard route

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/29e87c74-3f22-4b1a-8aef-50d84af514fa)

# ADMIN - CREATE NEW POST (POST METHOD)

**Testing our post method and log it to the console.**
* We  are logging req.body to the console, which is a common debugging technique to inspect the data being sent in the request body.
* This helps us verify that the form data is being correctly submitted to the server.

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/438a7441-4b95-4c0a-a8d6-9c2924bec59e)

**Add data (blog entry) to the server**

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/d5b9278e-bb31-4da4-90fd-eaa49eb5934b)


# Issues

* These are the issues I encounter while working on this project and what I did to fix it
* This table will be updated periodically as I progress through this project.

![image](https://github.com/asyikin22/Blog-Express-MongoDB/assets/148519441/1fb9ab65-ef3b-4ed9-b546-422b70cab101)



  

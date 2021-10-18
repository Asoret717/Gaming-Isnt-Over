# Gaming-Isnt-Over
First App Hardly Completed with Ionic, Java Spring and Sql


## Links to the files

-Database Scripts: <br>
https://github.com/Asoret717/Gaming-Isnt-Over/tree/main/database-scripts <br>

-Backend (Java Spring): <br>
https://github.com/Asoret717/Gaming-Isnt-Over/tree/main/backend <br>

-Frontend (Ionic): <br>
https://github.com/Asoret717/Gaming-Isnt-Over/tree/main/frontend <br>


## Ports and Commands

### Ports

Mysql uses ports 80,443 and 3306. The Backend with Java Swing port 8080 and the ionic Frontend the 8200 one.

![image](https://user-images.githubusercontent.com/81707462/137812160-f2c48420-3bdd-4f7c-87bd-c404cd257348.png)

### Commands

To install ionic after getting ng.modules LTS:

npm install -g @ionic/cli

To call the frontend, remember to use this one,situated in the frontend folder, to open it in mobile view:

ionic serve --lab

## Sql

You need a mySql server, I open one with xamp in the port 3306 (also 86 and 443 for Xampp):

![image](https://user-images.githubusercontent.com/81707462/137819493-4e3079d0-5ffa-47b2-a9a9-f0ec08b61f7f.png)

Select import and upload the database file:

![image](https://user-images.githubusercontent.com/81707462/137819229-d7daa667-eb10-4a80-b4fa-5cfee1dc31d2.png)


## Backend

In my project I use Java Spring in the port 8080, apart from services, controllers, and models I use Dao to manipulate
the sql operations easier. To sum up it controls 2 tables employees and technology with a full CRUD.

![image](https://user-images.githubusercontent.com/81707462/137812434-90412053-4d18-457b-b274-9129a4533849.png)

### Dependencies and fast tutorial

Eclipse Version: 2021-09 (4.21.0)            Spring Tools 4: 4.12.0.RELEASE 

First open the backend folder in Eclipse, follow the steps in the next window:

![image](https://user-images.githubusercontent.com/81707462/137813892-8cd3c0bc-a9a1-429e-b827-0188600cabc8.png)

Before you continue if you need to change the login values edit application.properties (its in src/main/resources):

![image](https://user-images.githubusercontent.com/81707462/137814895-7c0592e8-3c7d-4325-b1ee-af39bde1e9d1.png)

To make the backend work you first need to install Java Spring plugin in the Eclipse Market Place:

![image](https://user-images.githubusercontent.com/81707462/137813128-61637aa6-47ae-423d-9e39-c385e06e5922.png)

Now you are ready to run the backend, right click the backend folder and follow to steps to select the Spring boot App:

![image](https://user-images.githubusercontent.com/81707462/137813353-4a0b8abf-05c5-40c3-bfcc-33f9241f53ba.png)

If all went fine you can check that the program loaded and this page shows values properly:

![image](https://user-images.githubusercontent.com/81707462/137814347-9eca7035-21b1-46eb-bdef-b9b1c325bd05.png)


## Frontend

For the frontend I use Ionic as it is a mobile app, opens in port 8200. I made multiple componentes and views, with models and
services. A slider and a table that uses the sql database values, login form that validates with username and password and finally
a search bar that actually works to search the name of the product.

![image](https://user-images.githubusercontent.com/81707462/137815329-d25f741a-990f-4745-9b04-dd5c295a36b0.png)

### Fast tutorial

Visual Studio Code Version: 1.61.1

To begin open the frontend folder in Visual studio code:

![image](https://user-images.githubusercontent.com/81707462/137815694-ac13be74-5992-40db-ab0c-766d64b4ae4f.png)

You need to install node.js choose the LTS version (https://nodejs.org/en/)

![image](https://user-images.githubusercontent.com/81707462/137817024-b9e05c0a-c3b1-4180-b17e-ac5e5627dbca.png)

Next with right click in the frontend folder open the integrated terminal:

![image](https://user-images.githubusercontent.com/81707462/137816061-166a2552-757a-43ec-8904-36308fde1a5b.png)

Now you are able to run the command to get ionic "npm install -g @ionic/cli":

![image](https://user-images.githubusercontent.com/81707462/137817214-bb53860e-5408-4d90-9e71-6a9b8146f570.png)

Execute the "ionic server --lab" command to run it in mobile view and you are done:

![image](https://user-images.githubusercontent.com/81707462/137816430-36286493-969d-447c-b40b-e80446083063.png)

This is how it looks at the end, if the photos below don't show then the backend it's probably failing (Recommend Android view):

![image](https://user-images.githubusercontent.com/81707462/137817892-d799fd7e-55d1-4f44-b536-5132381d6dcb.png)


### Curiosities

This are just some interesting things that I did in the frontend, I think it is the best part where you can try things
and actually see them.

#### Slider

The slider moves automatically with filenames that come from the database.

-If you leave the page and come back it starts to auto slide again
-Even if it gets touched manually it will continue sliding when it stops

![image](https://user-images.githubusercontent.com/81707462/137817681-8e2294b4-58a4-45b4-ab0d-f8a0b91c5b45.png)

#### Search Bar

The search bar for products work with names, the result will be the products that have the name in common but it can also be a substring.

-It checks if the value is long enough.
-If you search something that doesn't exists it will tell you.
-I added some buttons for recommended searchs like webpages do.

![image](https://user-images.githubusercontent.com/81707462/137818218-30ff8fcc-04bb-4b6f-bcae-9cef5947198c.png)

#### Login

The login checks if you entered the right username and password.
-An alert pops out when you fail the combination
-In this example the right combination is (admin - 1234)

![image](https://user-images.githubusercontent.com/81707462/137819678-fe820a01-cb68-49c4-9248-2bd2652ec5af.png)

#### Admin menu

To open the menu press the button on the top and it will appear at the left side.
-Press the logout button to get out
-For now it really doesn't do much

![image](https://user-images.githubusercontent.com/81707462/137819625-baf22a13-f32e-4104-a941-3869efced670.png)

### Useful links that I used

As this is the first time I really don't know everysingle page I used, because there were a lot.

Hardly everything as it is the main page (https://ionicframework.com/docs/components)
Reactive Forms tutorial (https://remotestack.io/ionic-form-validation-with-reactive-forms-example/)








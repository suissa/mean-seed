#MEAN-Seed

##To install

    npm install

##To run

    npm start

##To populate Mongo
    GET /api/beers/populate

##To see running

    http://localhost:3000/beers

##The API

> GET /api/beers

> GET /api/beers/populate

> GET /api/beers/\_id/:id

> POST /api/beers/

> PUT /api/beers/\_id/:id

> DELETE /api/beers/\_id/:id


#Directory Layout
    back/
      bin/
      config/
        db.js
      modules/
        main/
        expose/
        {{entity}}/
          api/
            controller.js
            routes.js
          views/
            create.jade
            edit.jade
            list.jade
            remove.jade
            show.jade
          controller.js
          model.js
          routes.js

    front/
      bower_components/
      css/
      js/
        lib/
        modules/
          {{entity}}/
            controllers.js
            services.js
            directives.js
            filters.js


#Nomenclature
##AngularJs

###Angularjs - Modules
Name:
>{Entity}{Action}Controller

Folder:
>/public/js/modules/{{entity}}

###Angularjs - Controllers
Name:
>{Entity}{Action}Controller

Folder:
>/public/js/modules/{{entity}}/controllers.js

###Angularjs - Services
Name:
>{Entity}{Service|Factory}

Folder:
>/public/js/modules/{{entity}}/services.js

###Angularjs - Filters
Name:
>{Entity}{FilterName}

Folder:
>/public/js/modules/{{entity}}/services.js

###Angularjs - Directives
Name:
>{Entity}{DirectiveName}

Folder:
>/public/js/modules/{{entity}}/directives.js


**Wait for the Atomic Design**

To implement:

- AngularJS Styleguide - https://github.com/johnpapa/angularjs-styleguide
- Offline First
- React Atomic Design Behavior
- State machine for rollback for fields in databases/offline
- Authentication
- SOLID
- Object Calisthenics


MEAN-seed is based in Angular Express Seed, you can see more about below.

# Angular Express Seed

Start an awesome app with AngularJS on the front, Express + Node on the back. This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use Node to serve their app.

The seed contains angular libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use angular-express-seed

Clone the angular-express-seed repository, run `npm install` to grab the dependencies, and start hacking!

### Running the app

Runs like a typical node app:

    node app.js

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade



## Example App

A simple [blog](https://github.com/btford/angular-express-blog) based on this seed.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.

## License
MIT







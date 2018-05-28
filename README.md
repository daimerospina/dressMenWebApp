# dressMenWebApp

This is a MVC project that is composed by three modules:
  * Front-end: build with HTML5, CSS3 and Bootstrap.
  * Controller: build in Angular 6 comsuming external API Rests.
  * Back-ends: generated in Spring framework based in a yaml file Swagger specification.

## Front-end and Controller

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To see the flow and how the application works, whatch the [video](https://youtu.be/9v38F8DcbUk)

## Back-end

There are two projects, one exposes and API Rest that serves the categories and the second one exposes and API Rest that recieves orders in json format.

The API services are published in the next public URLs (in a AWS Lunux server):
  Note: See the API documentations to know how to consume the resources.
  * Categories -> Full Swagger documentacion: `http://ec2-34-219-6-196.us-west-2.compute.amazonaws.com:8080/products`
  * Order -> Full Swagger documentacion: `http://ec2-34-219-6-196.us-west-2.compute.amazonaws.com:8081/order`
        
### Build projects

To run the projects in your local machine, executes the next Maven command `mvn spring-boot:run`, after that navigate to `http://localhost:8080/products` and `http://localhost:8081/order` to see the Swagger documentation.


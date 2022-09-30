# Factory Method Creational Design Pattern on TypeScript

[FactoryMethod] is a creational design pattern that provides an interface for creating objects in a superclass but allow subclass to alter the type of objects that will be created.


# Problem

- Lets imagine that you are creating a logistics management application. The first version of your app can only handle transportation by truck so the build of your code lives inside the Truck Class.
- After a while, your app becomes pretty popular. Each dat you recieve dozen of request from sea transportation companies to incorporate sea logistics into the app.
- A present most of your code is coupled to the Truck class. Adding ship into the app would require making change to the entire codebase.
- As a result you will endup with pretty nasty code.

# Class Diagram 
![image-20220928-041513](https://user-images.githubusercontent.com/2398607/192848800-a1bc6ed0-8bcc-437d-aff5-d79d72e1b815.png)

# Solution
- The Product declares the interface, which is common to all the objects that can be produced by the creator and its subclass.
- Concrete Products are different implementations of the product interface.
- The Creator class declares the factory method that return new product objects. Its important that the return type of this method matches the product interface. You can declare the factory method as abstract to force all subclasses to implement their own version of the method. As an alternative, the base factory method can return some default product type.
- Concrete Creators override the base factory method so it return a different type of product. Note that facoty method doesnt have to create new instances all the time. It can also return existing objects from a cache, an object pool or another source.

[FactoryMethod]: <>
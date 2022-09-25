# Singleton Creational Design Pattern on TypeScript

Singleton is creational design pattern that lets you ensure that class has only single instance


# Problem

- Ensure that a class has a single instance. The most common usescase will be same shared resources like a file or database.
- Provide a global access to that instance, and hide some the internal variable to avoid misuse.

# Solution 
- Make a default constructor private, to prevent from create new object.
- Create a static creation method that act as a constructor. Under the hood, this method calls the private constructor to create an object.
- Static field : once created save it in static field.
- Check if (condition) the static field has any object, in the first call to the creation method it will not have any static field at that time it will create the object  and save it in above static field, the same object is always returned if it called again later on.

# Class Diagram
![image-20220925-083827](https://user-images.githubusercontent.com/2398607/192135777-e4d7a1de-b20e-448a-bc9d-102e046a899c.png)

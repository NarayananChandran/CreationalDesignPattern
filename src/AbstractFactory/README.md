# Factory Method Creational Design Pattern on TypeScript

[AbstractFactory] is a creational design pattern that lets you produce families of related objects without specifying their concrete class.


# Problem

- Lets imagine that you are creating a logistics management application. The first version of your app can only handle transportation by truck so the build of your code lives inside the Truck Class.
- After a while, your app becomes pretty popular. Each dat you recieve dozen of request from sea transportation companies to incorporate sea logistics into the app.
- A present most of your code is coupled to the Truck class. Adding ship into the app would require making change to the entire codebase.
- As a result you will endup with pretty nasty code.

# Class Diagram 
![image-20220928-041513](https://user-images.githubusercontent.com/2398607/193299920-3ec94d31-851c-4f34-be67-2a374c342e47.png)

# Solution
- Abstract Product  decalres interfaces for a set of distinct but related products which make up a product family. In above exmaple we have [Chair.ts] and [Table.ts].
- Concrete Products implementation od the abstract product, it implements all the variants of the product. In example we are implementing [ModernChair.ts], [ModerTable.ts] , [ClassicChair.ts] and [ClassicTable.ts].
- Abstract Factory declared interface set of methods for creating abstracr products. [Factory.ts].
- Concrete Factories implement creational methods of abstract factory. Each concrete factory corresponds to specific variant of the product. [ClassicFactory.ts] and [ModernFactory.ts].

[AbstractFactory]: <>
[Chair.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Chair.ts>
[Table.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Table.ts>
[ModernChair.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Modern/ModernChair.ts>
[ModerTable.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Modern/ModernTable.ts>

[ClassicChair.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Classic/ClassicChair.ts>
[ModerTable.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Modern/ModernTable.ts>
[ClassicTable.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Classic/ClassicTable.ts>
[Factory.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/Factory.ts>
[ClassicFactory.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/ConcreteFactory/ClassicFactory.ts>
[ModernFactory.ts]: <https://github.com/NarayananChandran/CreationalDesignPattern/blob/main/src/AbstractFactory/ConcreteFactory/ModernFactory.ts>

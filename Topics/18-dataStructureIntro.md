# Data Structures Intro

## 104. Which Data Structure is the best?

- Data Structure: For storing data
- Different data structures excell in different situations.
  - Working with map/lacation data? Graph
  - Need an ordered list with fast inserts/removals at the beginning and end? Linked list
  - Web scraping nested HTML? Tree
  - Need to write a scheduler? Binary heap

## 105. ES2015 Class Syntax

### Class

- A blueprint for creating objects with pre-defined properties and methods
- JS: Prototype-based inheritance (JS doesn't have Object-oriented inheritance model.)
- Implement data structures as classes.

## 106. Data Structures: The Class Keyword

```js
class Student {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Full Name is ${this.firstName} ${this.lastName}.`
  }
  static enrollStudents (...students) {
    // do something
  }

  Student.enrollStudents([firstStudent, secondStudent])
}

// creating objects from classes
let firstStudent = new Student("Colt", "Steele")
let secondStudent = new Student("Euny", "Jeon")
```

- The method to create new objects must be called constructor.
- The class keyword creates a constant, so you can not redefine it.
- `this` in constructor/instance methods refer to a specific instance of the class.

## 107. Data Structures: Instance Methods

- `fullName` is an instance method of `Student` class.
- It can access to the instance's properties.
- Instance methods operate on individual instances

## 108. Data Structures: Class Methods / Static Methods

- Using `static` keyword to define a functionality that is pertinent to classes but not necessarily to individual instances of a class
- E.g., for utility function

  ```js
  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }

    // class fuction
    static distance (a, b) {
      const dx = a.x - b.x
      const dy = a.y - b.y

      return Math.hypot(dx,dy)
    }
  }

  const p1 = new Point(5, 5)
  const p2 = new Point(10, 10)

  Point.distance(p1, p2)
  ```

- `enrollStudents` is a class method of `Student` class.


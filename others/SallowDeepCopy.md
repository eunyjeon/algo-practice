# Shallow copy vs Deep copy

## Shallow Copy
  - A bit-wise copy of an object
  - A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
  - Only one level is copied, and that will work fine for an array or object containing only primitive values.
  - It makes a copy of the reference to X into Y. Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same i.e. they will be pointing to the same memory location.

## Deep Copy
  - A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.
  - It makes a copy of all the members of X, allocates different memory location for Y and then assigns the copied members to Y to achieve deep copy. In this way, if X vanishes Y is still valid in the memory.
  - **JSON.parse(JSON.stringify(oldObject))**

## Examples
#### Shallow Copy
  ```js
  let employeeInfo = {
    name: 'Euny',
    profession: 'Software Engineer',
    location: 'NY'
  }

  let employeeInfoDuplicate = employeeInfo

  employeeInfoDuplicate.location = 'SF' // it will change the value of employeeInfo.location as well.
  ```
#### Deep Copy
  ```js
  // Method 1 - not recommended
  let employeeDuplicate = {
    name: employeeInfo.name,
    profession: employeeInfo.profession,
    location: employeeInfo.location
  }

  // Method 2 - JSON.parse && JSON.stringify
  let newObj = JSON.parse(JSON.stringify(oldObj))

  // Method 3 - JS functions
  function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
      return objectpassed;
    }
  // give temporary-storage the original obj's constructor
  var temporary-storage = objectpassed.constructor();
    for (var key in objectpassed) {
      temporary-storage[key] = keepCloning(objectpassed[key]);
    }
    return temporary-storage;
  }
  var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
  var employeeDetailsDuplicate = (keepCloning(employeeDetailsOriginal));
  employeeDetailsOriginal.name = "NameChanged";
  console.log(employeeDetailsOriginal);
  console.log(employeeDetailsDuplicate);

  ```

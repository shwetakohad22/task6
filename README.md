# Task-6

## In this Repository i have created 4 different JS files for creating Classes



# 1. Write a class for a Circle to show it's radius of the circle.

The `Circle` class represents a circle with properties for radius and color. It includes methods to manipulate these properties and calculate the area and circumference of the circle.

## Class Properties

- `radius`: A double representing the radius of the circle (default: 1.0).
- `color`: A string representing the color of the circle (default: "red").

## Constructor

- `Circle()`: Creates a circle with default radius and color.
- `Circle(radius: double)`: Creates a circle with the specified radius and default color.
- `Circle(radius: double, color: string)`: Creates a circle with the specified radius and color.

## Methods

- `getRadius(): double`: Returns the current radius of the circle.
- `setRadius(radius: double): void`: Sets the radius of the circle.
- `getColor(): string`: Returns the current color of the circle.
- `setColor(color: string): void`: Sets the color of the circle.
- `toString(): string`: Returns a string representation of the circle.
- `getArea(): double`: Calculates and returns the area of the circle.
- `getCircumference(): double`: Calculates and returns the circumference of the circle.


# 2. Write Movie Class to show it's ratings.

The `Movie` class represents a film with properties for the title, studio, and rating. It includes a static method to filter movies by rating.

## Class Structure

### Constructor

```javascript
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // Static method to filter movies by rating
  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}
```
# 3. Write a “person” class to hold all the details.

The `Person` class is a JavaScript implementation representing an individual with properties for name, age, and address. It includes methods to retrieve and update these details.

## Class Structure

### Constructor

```javascript
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
```
# 4. write a class to calculate the Uber price.

The `Uber` class is a JavaScript implementation that calculates the price of an Uber ride based on the distance and time. It includes a constructor for setting the base fare, cost per kilometer, cost per minute, and currency, as well as a method to calculate the total price.

## Class Structure

### Constructor

```javascript
class UberPriceCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute, currency) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
    this.currency = currency;
  }
  ```

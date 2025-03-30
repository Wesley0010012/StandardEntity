# StandardEntity

## Overview

**StandardEntity** is a robust package designed to establish a standardized structure for entity management in software development. It provides abstract classes that serve as a foundation for defining domain-specific entities with unique identifiers and structured properties.

## Installation

To install the package using `npm`, execute the following command:

```sh
npm install standard-entity
```

## Usage

After installation, the base classes can be imported and extended to create custom entities:

```ts
import { Entity } from "standard-entity";

class User extends Entity<string, { name: string; email: string }> {
  constructor(id: string, props: { name: string; email: string }) {
    super(props, id);
  }
}
```

## `Entity` Class

The `Entity` class is a generic abstract class that defines the fundamental structure for entities, encapsulating an identifier (`Id`) and properties (`Props`).

### Example Implementation

```ts
import { Entity } from "standard-entity";

type ProductProps = {
  name: string;
  price: number;
};

class Product extends Entity<number, ProductProps> {
  constructor(id: number, props: ProductProps) {
    super(props, id);
  }
}
```

### Key Features

- **Identifier Management**: Provides getter and setter methods for entity IDs.
- **Encapsulated Properties**: Ensures structured access to entity attributes.
- **Serialization Support**: The `toJSON` method enables seamless serialization for data exchange.

### Usage Example

```ts
const product = new Product(1, { name: "Laptop", price: 1500 });

console.log(product.id); // 1
console.log(product.props.name); // "Laptop"
console.log(product.toJSON()); // { id: 1, name: "Laptop", price: 1500 }
```

## `Others Entities` Classes

Others entities have been implemented to represente entities with custom identifiers, like:

- **`StringIdEntity`**
    - **`UUIDGeneratedIdEntity`**
- **`NumericIdEntity`**
    - **`IntIdEntity`**
- **`BinaryIdEntity`**

### Example Implementation

```ts
import { StringIdEntity } from "standard-entity";

type CustomerProps = {
  name: string;
  age: number;
};

class Customer extends StringIdEntity<CustomerProps> {
  constructor(id: string, props: CustomerProps) {
    super(props, id);
  }
}
```

### Usage Example

```ts
const customer = new Customer("cust-001", { name: "John Doe", age: 30 });

console.log(customer.id); // "cust-001"
console.log(customer.toJSON()); // { id: "cust-001", name: "John Doe", age: 30 }
```

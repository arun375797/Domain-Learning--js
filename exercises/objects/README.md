# Object Practice

Manipulate plain objects and understand reference semantics. Implement the
prompts in `practice.js`.

### Core Functions
1. `getFullName(user)` — combine `firstName` and `lastName`.
2. `pluckValues(items, key)` — return an array of `key` values from object array.
3. `mergePreferences(defaults, overrides)` — shallow merge two objects.
4. `countOccurrences(words)` — return an object mapping word -> count.
5. `groupBy(items, key)` — group objects by a property value.

### Extra Scenarios from Pending Bucket
- `isEmptyObject(value)` — detect if an object has no own properties.
- `highestValueKey(obj)` — return the key paired with the largest numeric value.
- `lowestValueKey(obj)` — return the key with the smallest numeric value.
- `removeOddValuedEntries(obj)` — drop properties whose values are odd numbers.
- `deepClone(obj)` — implement a deep copy without using `structuredClone`.
- `freezeNested(obj)` — recursively `Object.freeze` a structure.
- `sumObjectValues(obj)` — sum numeric values (support nested objects).
- `mergeUniqueUsers(listA, listB)` — combine arrays of objects without duplicates.
- `methodBorrowingExample()` — demonstrate `call`/`apply`/`bind` for objects.

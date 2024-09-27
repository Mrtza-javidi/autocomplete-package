# Autocomplete

This library implements a prefix tree (Trie) for word suggestions and autocomplete functionality.

## Installation

```bash
npm install autocompletable
```

## Usage

### Creating an Autocomplete Instance

You can create a new Trie instance for your autocomplete functionality by using the autocomplete() function. Each call to autocomplete() returns a fresh instance, allowing you to have multiple independent autocomplete systems.

### Adding Phrases

You can add phrases to the autocomplete system using the `addPhrase` method. It accepts two parameters:

- `phrase` (string): The word or phrase you want to add.
- `priority` (optional, number): The priority of the phrase. Lower numbers have higher priority. If no priority is provided, it defaults to a very low priority.

### Method Chaining

The addPhrase method supports chaining, allowing you to add multiple phrases in a single statement, as shown above.

#### Example:

```typescript
import { autocomplete } from "autocompletable";

// Create a new autocomplete instance
const nameAutocomplete = autocomplete();

// Adding phrases with optional priority
autocomplete
  .addPhrase("laleh", 3) // Priority 3
  .addPhrase("ladan", 1.2) // Higher priority than 'laleh'
  .addPhrase("laminor", 2) // Priority 2
  .addPhrase("liana", 1.2); // Same priority as 'ladan'
  .addPhrase("lara"); // infinity priority
```

### Getting Suggestions

You can retrieve suggestions using the suggest method, which accepts a prefix string and returns an array of words/phrases sorted by priority.

#### Example:

```typescript
// Get suggestions for a prefix
nameAutocomplete.suggest("la");
// Returns ['ladan', 'liana', 'laminor', 'laleh', 'lara']
```

The project is open-source and I welcome contributions from the community!

Hope you enjoy using it.

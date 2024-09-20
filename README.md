# Trie Autocomplete Library

This library implements a prefix tree (Trie) for word suggestions and autocomplete functionality.

## Installation

```bash
npm install trie-autocomplete
```

## Usage

### Adding Phrases

You can add phrases to the autocomplete system using the `addPhrase` function. It accepts two parameters:

- `phrase` (string): The word or phrase you want to add.
- `priority` (optional, number): The priority of the phrase. Lower numbers have higher priority. If no priority is provided, it defaults to a very low priority.

#### Example:

```typescript
import { addPhrase, autocomplete } from "trie-autocomplete";

// Adding phrases with optional priority
addPhrase("morteza", 1); // High priority
addPhrase("mohammad", 1.2); // Lower priority than 'morteza'
addPhrase("morid", 2); // Lowest priority
addPhrase("ali"); // Default priority (infinity)

// Get suggestions for a prefix
console.log(autocomplete("mo")); // Returns ['morteza', 'mohammad', 'morid']
```

# normalizedContains

A helper to compare two normalized versions of strings by ignoring
language specific diacritics and case.

## Usage

```typescript
import { normalizedContains } from 'normalized-contains';

normalizedContains('Théâtre antique', 'theatre'); // true
normalizedContains('Halló', 'hallo'); // true
normalizedContains('Halló', 'hello'); // false
```

## Install

```sh
npm install normalized-contains
```

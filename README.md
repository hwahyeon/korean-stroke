# korean-stroke
**korean-stroke** is a lightweight JavaScript library that calculates the total stroke count of Korean (Hangul) characters in a string.

## Installation
```bash
npm install korean-stroke
```

## Usage

### CommonJS

```javascript
const strokeCounter = require('korean-stroke');

console.log(strokeCounter('안녕')); // 11
```

### ES Modules
```javascript
import strokeCounter from 'korean-stroke'

console.log(strokeCounter('안녕')); // 11
```

**Note**: The `strokeCounter` function calculates the stroke count for Korean characters only. Any non-Korean characters in the input string will not be counted towards the total stroke count.

## API

### `strokeCounter(string)`

- **Parameters**
  - `string` (String): The Korean string to calculate strokes for.
- **Returns**
  - Number: Total stroke count of Korean characters in the input string.

## License
MIT License

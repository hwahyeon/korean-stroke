# korean-stroke
**korean-stroke**는 한글 문자열의 획 횟수를 계산해주는 JavaScript 라이브러리입니다.
- **korean-stroke** is a JavaScript library for calculating the total stroke count of Korean characters in a string.

## Installation
```bash
npm install korean-stroke
```

## Usage
```javascript
const strokeCounter = require('korean-stroke');

console.log(strokeCounter('안녕')); // 11
```
OR
```javascript
import strokeCounter from 'korean-stroke'

console.log(strokeCounter('안녕')); // 11
```

## API

### `strokeCounter(string)`

- **Parameters**
  - `string` (String): The Korean string to calculate.
- **Returns**
  - (Number): A total stroke count of the input string..

## License
This project is provided under the MIT License.

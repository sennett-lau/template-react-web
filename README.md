# Template React Web

## Description
This project is a web template for ReactJS, using the following technologies:
- ReactJS
- Redux
- TailwindCSS
- Typescript
- React Router
- Craco

## Installation
Clone this repository by running the following command:
```bash
git clone git@github.com:laub1199/template-react-web.git
```
To install the project, you need to have NodeJS installed on your machine. After that, you can run the following commands:
```bash
npm install
```

## Implementation

### Development
For development purposes, you can run the following command:
```bash
npm run start
```

### Production
For production purposes, you can run the following command:
```bash
npm run build
```
A folder called `build` will be created, containing the production files. You can serve these files using any web server.

## Usage

### Hooks
Some reusable hooks are available in the `src/hooks` folder.

#### `useWindowDimensions`
This hook returns the current window dimensions.
```typescript
// To import the hook
import useWindowDimensions from '@hooks/useWindowDimensions'

// Hook implementation in a component
const { width, height } = useWindowDimensions();
```

## License
This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

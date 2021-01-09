# css-vars-2-ts

### Generate typescript interfaces and constants from .css/.scss/.sass

This library was generated with [Nx](https://nx.dev).

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [License](#license)

<!-- /TOC -->

## Installation

For the best CLI, we recommend installing `css-vars-2-ts` globally via `npm` or `yarn`:

#### npm

```bash
npm install -g css-vars-2-ts
```

#### yarn

```bash
yarn global add css-vars-2-ts
```

or

```bash
yarn add css-vars-2-ts -D
```

## Usage

### Input

`./vars.css`

```css
body[data-theme='light'] {
  --colors-background: #fff;
  --colors-primary: #17a2b8;
  --colors-secondary: #798892;
  --colors-success: #43a047;
  --colors-info: #846eab;
  --colors-warning: #ffc247;
  --colors-danger: #f55d5d;
  --colors-dark: #3c484f;
  --colors-inverse: #495057;
  --colors-gray: #d6dee5;
  --colors-light: #f8f9fa;
  --colors-default: #e9ecef;
  --colors-primary-light: #dee4ee;
  --colors-success-light: #ecfaec;
  --colors-info-light: #f2fafa;
  --colors-warning-light: #fdf7e6;
  --colors-danger-light: #fff2ef;
  --colors-body-bg: #f8f9fa;
  --colors-white: #fff;
  --colors-gray-light: #f8f9fa;
  --colors-border-color: #c4c4c4;
  --colors-green-light: #00c853;
  --colors-disabled: #f3f3f3;
  --colors-textInfoBg: #f8cbd0;
  --colors-textInfoBorder: #a6a1a4;
  --colors-lineHeader: #7d7d7d;
  --lightness: 0.8;

  --spacing-gutter-vertical: 2.4rem;
  --spacing-gutter-horizontal: 2.4rem;
  --spacing-header-spacing-small: 0.5rem;
  --spacing-header-spacing-medium: 1rem;
  --spacing-header-spacing-large: 2rem;
}

body[data-theme='dark'] {
  --colors-background: #fff;
  --colors-primary: #17a2b8;
  --colors-secondary: #798892;
  --colors-success: #43a047;
  --colors-info: #846eab;
  --colors-warning: #ffc247;
  --colors-danger: #f55d5d;
  --colors-dark: #3c484f;
  --colors-inverse: #495057;
  --colors-gray: #d6dee5;
  --colors-light: #f8f9fa;
  --colors-default: #e9ecef;
  --colors-primary-light: #dee4ee;
  --colors-success-light: #ecfaec;
  --colors-info-light: #f2fafa;
  --colors-warning-light: #fdf7e6;
  --colors-danger-light: #fff2ef;
  --colors-body-bg: #f8f9fa;
  --colors-white: #fff;
  --colors-gray-light: #f8f9fa;
  --colors-border-color: #c4c4c4;
  --colors-green-light: #00c853;
  --colors-disabled: #f3f3f3;
  --colors-textInfoBg: #f8cbd0;
  --colors-textInfoBorder: #a6a1a4;
  --colors-lineHeader: #7d7d7d;
  --lightness: 0.2;

  --spacing-gutter-vertical: 2.4rem;
  --spacing-gutter-horizontal: 2.4rem;
  --spacing-header-spacing-small: 0.5rem;
  --spacing-header-spacing-medium: 1rem;
  --spacing-header-spacing-large: 2rem;
}
```

### Command

```bash
css-vars-2-ts vars.css
```

### Output

`./vars-const.ts`

```ts
export const themes = {
  light: {
    colors: {
      background: 'var(--colors-background)',
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      success: 'var(--colors-success)',
      info: 'var(--colors-info)',
      warning: 'var(--colors-warning)',
      danger: 'var(--colors-danger)',
      dark: 'var(--colors-dark)',
      inverse: 'var(--colors-inverse)',
      gray: 'var(--colors-gray)',
      light: 'var(--colors-light)',
      default: 'var(--colors-default)',
      primaryLight: 'var(--colors-primary-light)',
      successLight: 'var(--colors-success-light)',
      infoLight: 'var(--colors-info-light)',
      warningLight: 'var(--colors-warning-light)',
      dangerLight: 'var(--colors-danger-light)',
      bodyBg: 'var(--colors-body-bg)',
      white: 'var(--colors-white)',
      grayLight: 'var(--colors-gray-light)',
      borderColor: 'var(--colors-border-color)',
      greenLight: 'var(--colors-green-light)',
      disabled: 'var(--colors-disabled)',
      textInfoBg: 'var(--colors-textInfoBg)',
      textInfoBorder: 'var(--colors-textInfoBorder)',
      lineHeader: 'var(--colors-lineHeader)',
    },
    lightness: 'var(--lightness)',
    spacing: {
      gutterVertical: 'var(--spacing-gutter-vertical)',
      gutterHorizontal: 'var(--spacing-gutter-horizontal)',
      headerSpacingSmall: 'var(--spacing-header-spacing-small)',
      headerSpacingMedium: 'var(--spacing-header-spacing-medium)',
      headerSpacingLarge: 'var(--spacing-header-spacing-large)',
    },
  },
  dark: {
    colors: {
      background: 'var(--colors-background)',
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      success: 'var(--colors-success)',
      info: 'var(--colors-info)',
      warning: 'var(--colors-warning)',
      danger: 'var(--colors-danger)',
      dark: 'var(--colors-dark)',
      inverse: 'var(--colors-inverse)',
      gray: 'var(--colors-gray)',
      light: 'var(--colors-light)',
      default: 'var(--colors-default)',
      primaryLight: 'var(--colors-primary-light)',
      successLight: 'var(--colors-success-light)',
      infoLight: 'var(--colors-info-light)',
      warningLight: 'var(--colors-warning-light)',
      dangerLight: 'var(--colors-danger-light)',
      bodyBg: 'var(--colors-body-bg)',
      white: 'var(--colors-white)',
      grayLight: 'var(--colors-gray-light)',
      borderColor: 'var(--colors-border-color)',
      greenLight: 'var(--colors-green-light)',
      disabled: 'var(--colors-disabled)',
      textInfoBg: 'var(--colors-textInfoBg)',
      textInfoBorder: 'var(--colors-textInfoBorder)',
      lineHeader: 'var(--colors-lineHeader)',
    },
    lightness: 'var(--lightness)',
    spacing: {
      gutterVertical: 'var(--spacing-gutter-vertical)',
      gutterHorizontal: 'var(--spacing-gutter-horizontal)',
      headerSpacingSmall: 'var(--spacing-header-spacing-small)',
      headerSpacingMedium: 'var(--spacing-header-spacing-medium)',
      headerSpacingLarge: 'var(--spacing-header-spacing-large)',
    },
  },
};
```

`./vars-model.ts`

```ts
export interface Themes {
  light: Light;
  dark: Light;
}

export interface Light {
  colors: Colors;
  lightness: string;
  spacing: Spacing;
}

export interface Spacing {
  gutterVertical: string;
  gutterHorizontal: string;
  headerSpacingSmall: string;
  headerSpacingMedium: string;
  headerSpacingLarge: string;
}

export interface Colors {
  background: string;
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  dark: string;
  inverse: string;
  gray: string;
  light: string;
  default: string;
  primaryLight: string;
  successLight: string;
  infoLight: string;
  warningLight: string;
  dangerLight: string;
  bodyBg: string;
  white: string;
  grayLight: string;
  borderColor: string;
  greenLight: string;
  disabled: string;
  textInfoBg: string;
  textInfoBorder: string;
  lineHeader: string;
}
```

### Options

#### target

A directory where the generated files are placed.

Type: `string`

Default: `./`

#### targetName

A file name for constant.

Type: `string`

Default: `{css-file-name}-const.ts`

#### targetModelName

A file name for interfaces.

Type: `string`

Default: `{css-file-name}-model.ts`

#### help

Show all available args.

Type: `boolean`

Default: `false`

## License

The package is Open Source Software released under the [MIT licensed](LICENSE.md).

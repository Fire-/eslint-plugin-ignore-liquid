# eslint-plugin-ignore-liquid

This plugin ignores {% Liquid Computation %} and {{ Liquid Template }} existence in .html, .js, and .css files as they break ESLint.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ignore-liquid`:

```
$ npm install eslint-plugin-ignore-liquid --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ignore-liquid` globally.

## Usage

Add `ignore-liquid` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ignore-liquid"
    ]
}
```

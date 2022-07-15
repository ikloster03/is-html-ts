# is-html

> Check if a string is HTML

You should not use this for any kind of validation, sanitation, or XSS checks.

## Install

```
$ npm install is-html-ts
```
```
$ yarn add is-html-ts
```

## Usage

```ts
import isHtml, { basic, full } from 'is-html-ts';
import type { Options } from 'is-html-ts'

isHtml('<p>I am HTML</p>');
//=> true

isHtml('<!doctype><html><body><h1>I ❤ unicorns</h1></body></html>');
//=> true

isHtml('<cake>I am XML</cake>');
//=> false

isHtml('>+++++++>++++++++++>+++>+<<<<-');
//=> false

const customOptions: Options = {
    regExp: 'basic',
    length: 'all',
};

isHtml('<!doctype><html><body><h1>I ❤ unicorns</h1></body></html>', customOptions);
//=> true

isHtml('<cake>I am XML</cake>', customOptions);
//=> false
```

Note: It does not detect deprecated HTML tags.

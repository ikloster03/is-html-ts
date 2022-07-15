import { basic, defaultOptions, full, isHtml, isRegExp } from './is-html';

describe('String is HTML',  () => {
  it('should detect HTML if it has doctype', () => {
    expect(isHtml('<!doctype html>')).toBeTruthy();
    expect(isHtml('\n\n<!doctype html><html>')).toBeTruthy();
  });

  it('should detect HTML if it has <html>, <body> or <x-*>', () => {
    expect(isHtml('<html>')).toBeTruthy();
    expect(isHtml('<html></html>')).toBeTruthy();
    expect(isHtml('<html lang="en"></html>')).toBeTruthy();
    expect(isHtml('<html><body></html>')).toBeTruthy();
    expect(isHtml('<html><body class="no-js"></html>')).toBeTruthy();
    expect(isHtml('<x-unicorn>')).toBeTruthy();
  });

  it('should detect HTML if it contains any of the standard HTML tags', () => {
    expect(isHtml('<p>foo</p>')).toBeTruthy();
    expect(isHtml('<a href="#">foo</a>')).toBeTruthy();
  });

  it('should not match XML', () => {
    expect(isHtml('<cake>foo</cake>')).toBeFalsy();
    expect(isHtml('<any>rocks</any>')).toBeFalsy();
    expect(isHtml('<htmly>not</htmly>')).toBeFalsy();
    expect(isHtml('<bodyx>not</bodyx>')).toBeFalsy();
  });
});

describe('Options', () => {
  it('should default options', () => {
    expect(isHtml('<!doctype html>', {})).toBeTruthy();
  });

  it('should regExp=basic', () => {
    expect(isHtml('<!doctype html>', { regExp: 'basic' })).toBeTruthy();
    expect(isHtml('\n\n<!doctype html><html>', { regExp: 'basic' })).toBeTruthy();
    expect(isHtml('<x-unicorn>', { regExp: 'basic' })).toBeTruthy();
    expect(isHtml('<cake>foo</cake>', { regExp: 'basic' })).toBeFalsy();
  });

  it('should length=all', () => {
    expect(isHtml('<!doctype html>', { length: 'all' })).toBeTruthy();
  });

  it('should length=number', () => {
    expect(isHtml('<!doctype html>', { length: 15 })).toBeTruthy();
    expect(isHtml('<!doctype html>', { length: 14 })).toBeFalsy();
    expect(isHtml('<!doctype html>', { length: 2 })).toBeFalsy();
  });

  it('should regExp is custom rule', () => {
    expect(isHtml('<!doctype html>', {
      regExp: /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i,
    })).toBeTruthy();
  });
});

describe('isRegExp',  () => {
  it('should regexp', () => {
    expect(isRegExp(basic)).toBeTruthy();
    expect(isRegExp(full)).toBeTruthy();
    expect(isRegExp(defaultOptions)).toBeFalsy();
    expect(isRegExp(isHtml)).toBeFalsy();
  });
});

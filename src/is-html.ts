import * as htmlTags from 'html-tags';

export type Options = {
  regExp?: 'basic' | 'full' | RegExp;
  length?: 'all' | number;
}

export const defaultOptions: Options = {
  regExp: 'full',
  length: 1000,  // We limit it to a reasonable length to improve performance.
};

export const basic = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
export const full = new RegExp(htmlTags.map(tag => `<${tag}\\b[^>]*>`).join('|'), 'i');

export const isRegExp = (value): value is RegExp => {
  return Object.prototype.toString.call(value) === '[object RegExp]';
};

export const isHtml = (string: string, options?: Options): boolean => {
  const opt: Options = options ?? defaultOptions;

  opt.regExp = opt.regExp ?? 'full';
  opt.length = opt.length ?? 1000;

  const trimmedString = string.trim();
  const slicedString = opt.length === 'all' ? trimmedString : trimmedString.slice(0, opt.length);

  if (isRegExp(opt.regExp)) {
    return opt.regExp.test(slicedString);
  }

  return opt.regExp === 'full'
    ? basic.test(slicedString) || full.test(slicedString)
    : basic.test(slicedString);
};

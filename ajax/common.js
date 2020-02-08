const UNSPLASH_ACCESS_KEY =
  '36d76a630d9480ad4338a20efce9e47d8fedb0cf6fbde92eedb9881c3da4cba3';
const NYTIMES_API_KEY = 'BsStnIsjuBR61w1dHNgEWgG7EqspYalX';

const form = document.querySelector('#search-form');
const searchField = document.querySelector('#search-keyword');
const responseContainer = document.querySelector('#response-container');

let searchedForText;

const errorHandler = console.log;

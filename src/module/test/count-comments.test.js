/**
 * @jest-environment jsdom
 */
/* global globalThis */
import fetch from 'cross-fetch';
import countComments from '../count-comments.js';
import addNewComment from '../add-new-comment.js';

globalThis.fetch = fetch;

document.body.innerHTML = `
<div class="meal-popup-comments-container"><p>Comments</p></div>
`;

describe('Add new comments and count it', () => {
  test('if jest work correctly', () => {
    expect(true).toBe(true);
  });

  test('Add comment 1', () => {
    const parent = document.querySelector('.meal-popup-comments-container');
    const row = document.createElement('p');
    row.innerHTML = '2022-11-30 Anna: Good';
    parent.appendChild(row);

    expect(countComments(parent)).toBe(2);
  });

  test('Add comment 2', () => {
    const parent = document.querySelector('.meal-popup-comments-container');
    const row = document.createElement('p');
    row.innerHTML = '2022-11-30 Dima: Great';
    parent.appendChild(row);

    expect(countComments(parent)).toBe(3);
  });
});

describe('Add tests with async fetch', () => {
  jest.setTimeout(10000);

  test('Add comment async 1', async () => {
    const parent = document.querySelector('.meal-popup-comments-container');
    await addNewComment(52977, 'test user', 'test comment');
    await expect(countComments(parent)).toBe(3);
  });
});

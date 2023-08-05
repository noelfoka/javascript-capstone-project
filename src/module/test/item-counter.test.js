/**
 * @jest-environment jsdom
 */
import count from '../count-items.js';

document.body.innerHTML = `
 <div class="home"><div class="meal">img</div></div>

 `;

describe('Add new meals and count it', () => {
  test('if jest work correctly', () => {
    expect(true).toBe(true);
  });

  test('Add meal-1', () => {
    const parent = document.querySelector('.home');
    const row = document.createElement('div');
    row.innerHTML = 'mealsName';
    parent.appendChild(row);

    expect(count(parent)).toBe(2);
  });

  test('Add meal-2', () => {
    const parent = document.querySelector('.home');
    const row = document.createElement('div');
    row.innerHTML = 'mealsName';
    parent.appendChild(row);

    expect(count(parent)).toBe(3);
  });
});
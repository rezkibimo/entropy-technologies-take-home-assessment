import { test, expect } from '@playwright/test';

test('todo list', async ({ page }) => {
  // Navigate to the todo list website
  await page.goto('https://entropy-technologies-take-home-assessment.vercel.app/');

  // Add a new todo
  const newTodoInput = await page.locator('input[placeholder="Add a new task"]');
  await newTodoInput.fill('New Todo');
  const addButton = await page.locator('button:has-text("Add")');
  await addButton.click();
  
  // Optionally, you can add a wait to see the addition visually
  await page.waitForTimeout(2000);
});

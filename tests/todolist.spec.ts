import { test, expect } from "@playwright/test";

test("add and remove item to todo list", async ({ page }) => {
  // Navigate to the todo list website
  await page.goto(
    "https://entropy-technologies-take-home-assessment.vercel.app/"
  );

  // Add item
  const newTodoInput = await page.locator(
    'input[placeholder="Add a new task"]'
  );
  await newTodoInput.fill("New Todo");
  const addButton = await page.locator('button:has-text("Add")');
  await addButton.click();

  await page.waitForTimeout(2000);

  // Remove item
  const removeButton = await page.locator('button:has-text("Remove")');
  await removeButton.click();
});

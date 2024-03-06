import { test, expect } from "@playwright/test";

test("add and remove item to todo list", async ({ page }) => {
  // Navigate to the todo list website
  await page.goto("http://localhost:3000");

  // Select the option with value "technology" in the select element with id "categories"
  await page.selectOption("#categories", { value: "technology" });

});

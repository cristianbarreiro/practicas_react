import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
const LOCALHOST_URL = 'http://localhost:5173';

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.locator('p');
  // Espera a que el párrafo tenga texto
  await expect(text).not.toBeEmpty();

  // Espera a que al menos una imagen esté visible
  await page.waitForSelector('img', { state: 'visible' });

  const images = await page.locator('img');
  const count = await images.count();
  let mainImage = null;
  for (let i = 0; i < count; i++) {
    const alt = await images.nth(i).getAttribute('alt');
    console.log('img alt:', alt); // Para depuración
    if (alt && !alt.includes('Random fact')) {
      mainImage = images.nth(i);
      break;
    }
  }
  if (!mainImage) throw new Error('No main image found');

  const textContent = await text.textContent();
  const imageSrc = await mainImage.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
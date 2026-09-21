# FITNESS_OS

A GitHub Pages-ready personal fitness tracker with a black/green terminal-style interface.

## Features
- Dashboard / command center
- Daily steps, weight, water
- Food logging by grams
- Automatic calories, protein, carbohydrates, fiber and fat calculations
- Built-in vegetarian food database
- Custom foods using nutrition-label values per 100 g
- "What to do next" coaching based on the day's data
- Push / Pull / Legs twice per week:
  - Monday Push A
  - Tuesday Pull A
  - Wednesday Legs A
  - Thursday Push B
  - Friday Pull B
  - Saturday Legs B
  - Sunday Recovery
- Exercise logging: sets, reps and weight
- Weight trend and daily history
- Configurable calorie/protein/carbs/fiber/steps/water targets
- JSON backup/export and import
- Optional PWA/service worker for installation on supported browsers
- No backend required; personal data is stored in browser localStorage

## GitHub Pages
1. Create a new GitHub repository.
2. Upload every file in this folder to the repository root.
3. Go to Settings -> Pages.
4. Under Build and deployment, select "Deploy from a branch".
5. Select the main branch and `/ (root)`.
6. Save and open the generated Pages URL.
7. On Android Chrome, use "Add to Home screen" / "Install app" if offered.

## Important
Nutrition values are estimates. For packaged/branded foods, use the nutrition label and the custom-food feature when necessary.

The app does not upload your personal fitness data to GitHub. Data is local to the browser/device. Use the JSON backup before changing browsers/devices.

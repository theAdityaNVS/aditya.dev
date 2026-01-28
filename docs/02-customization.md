# Step 2: Customization

## Personal Data
Navigate to `data/constants.ts`. This file contains all the text data for the website.

1. **Profile Info**: Update `RESUME_DATA` with your name, bio, and contact info.
2. **Skills**: Update `SKILLS` array. Note the `icon` property maps to keys in `components/ui/Icons.tsx`.
3. **Projects**: Add your own projects to the `PROJECTS` array.

## Adding New Icons
If you need a new technology icon:
1. Find a valid SVG for the logo.
2. Open `components/ui/Icons.tsx`.
3. Add a new key to the `Icons` object containing the SVG component.
4. Use that key in `data/constants.ts`.

## AI Persona
To change how the AI behaves, edit `services/geminiService.ts`.
Modify the `SYSTEM_INSTRUCTION` constant to change the persona name, tone, or rules.

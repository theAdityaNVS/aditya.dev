# Step 3: Deployment

## Option A: Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and import the project.
3. Add your `API_KEY` in the Vercel Project Settings > Environment Variables.
4. Click Deploy.

## Option B: GitHub Pages (Static)
Since this is a React SPA, you can deploy to GitHub Pages, but note that the Gemini API requires a secure way to hold keys.
*Warning*: Using the API key directly in client-side code on a public repo is risky. For production, it is recommended to proxy the AI requests through a simple backend (Next.js API route or Express server) to hide the key.

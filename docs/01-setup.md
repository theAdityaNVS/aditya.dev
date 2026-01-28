# Step 1: Setup & Installation

## Prerequisites
- Node.js (v18+)
- npm or yarn

## Installation

1. **Install Dependencies**
   Run the following command to install React, Tailwind, and necessary libraries:
   ```bash
   npm install react react-dom lucide-react @google/genai
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory to store your Gemini API key:
   ```
   API_KEY=your_gemini_api_key_here
   ```
   *Note: Never commit your .env file to GitHub.*

3. **Tailwind Configuration**
   Ensure `tailwind.config.js` or the script in `index.html` is configured to scan your new component folders:
   ```javascript
   // tailwind.config.js
   module.exports = {
     content: ["./components/**/*.{js,ts,jsx,tsx}", "./App.tsx"],
     // ...
   }
   ```

4. **Start Development Server**
   ```bash
   npm start
   ```

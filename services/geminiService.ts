import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, SKILLS, PROJECTS, EXPERIENCE } from '../constants';

// Construct a system prompt based on the static data
const SYSTEM_INSTRUCTION = `
You are Nova, an AI Assistant for ${RESUME_DATA.name}'s portfolio website.
Your goal is to answer visitor questions about ${RESUME_DATA.name} based STRICTLY on the provided context.

CONTEXT:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Bio: ${RESUME_DATA.bio}
Location: ${RESUME_DATA.location}
Contact: ${RESUME_DATA.email}
Availability: ${RESUME_DATA.availability}

Skills: ${SKILLS.map(s => s.name).join(', ')}
Projects: ${PROJECTS.map(p => `${p.title} (${p.description})`).join('; ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('; ')}

GUIDELINES:
- Be professional, enthusiastic, and concise.
- If asked about contact info, provide the email.
- If asked about skills or projects not listed, honestly say you don't have information on that but suggest asking about the listed skills.
- Keep answers under 3-4 sentences unless asked for detail.
- Act as an extension of ${RESUME_DATA.name}'s personal brand.
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: 'user' | 'model'; text: string }[], newMessage: string) => {
  const client = initGemini();
  if (!client) {
    throw new Error("API Key not configured");
  }

  // Map history to the format expected by the SDK if needed, 
  // but for simple single-turn or short context, we can just use generateContent with system instruction.
  // For better chat context, we use the chat API.
  
  const chat = client.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }],
    })),
  });

  const result = await chat.sendMessage({ message: newMessage });
  return result.text;
};

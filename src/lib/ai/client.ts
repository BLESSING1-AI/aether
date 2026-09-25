import OpenAI from 'openai'
import { SYSTEM_PROMPT } from './system-prompt'

export function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not configured')
  }

  return new OpenAI({
    apiKey,
    baseURL: process.env.OPENAI_BASE_URL || undefined,
  })
}

export type ChatMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function streamChatCompletion(params: {
  messages: ChatMessage[]
  mode?: string
  memoryContext?: string
  userPreferredName?: string
}) {
  const client = getOpenAIClient()
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

  let system = SYSTEM_PROMPT
  if (params.mode) {
    system += `\n\nCurrent mode: ${params.mode}`
  }
  if (params.userPreferredName) {
    system += `\n\nThe user’s preferred name is ${params.userPreferredName}. Address them naturally.`
  }
  if (params.memoryContext) {
    system += `\n\nRelevant private context the user has shared (use thoughtfully):\n${params.memoryContext}`
  }

  const messages: ChatMessage[] = [
    { role: 'system', content: system },
    ...params.messages,
  ]

  const stream = await client.chat.completions.create({
    model,
    messages,
    stream: true,
    temperature: 0.75,
    max_tokens: 2048,
  })

  return stream
}

export async function generateCompletion(params: {
  messages: ChatMessage[]
  mode?: string
  memoryContext?: string
  userPreferredName?: string
  temperature?: number
}) {
  const client = getOpenAIClient()
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

  let system = SYSTEM_PROMPT
  if (params.mode) system += `\n\nCurrent mode: ${params.mode}`
  if (params.userPreferredName) {
    system += `\n\nThe user’s preferred name is ${params.userPreferredName}.`
  }
  if (params.memoryContext) {
    system += `\n\nRelevant private context:\n${params.memoryContext}`
  }

  const response = await client.chat.completions.create({
    model,
    messages: [{ role: 'system', content: system }, ...params.messages],
    temperature: params.temperature ?? 0.75,
    max_tokens: 2048,
  })

  return response.choices[0]?.message?.content || ''
}

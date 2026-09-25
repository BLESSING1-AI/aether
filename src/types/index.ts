export type Profile = {
  id: string
  email: string | null
  preferred_name: string | null
  age_confirmed: boolean
  onboarding_completed: boolean
  goals: string[]
  relationship_status: string | null
  communication_style: string | null
  memory_enabled: boolean
  theme: string
  notifications_enabled: boolean
  created_at: string
  updated_at: string
}

export type Conversation = {
  id: string
  user_id: string
  title: string
  mode: string
  is_archived: boolean
  created_at: string
  updated_at: string
}

export type Message = {
  id: string
  conversation_id: string
  user_id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  created_at: string
}

export type Memory = {
  id: string
  user_id: string
  key: string
  value: string
  category: string
  source: string
  created_at: string
  updated_at: string
}

export type JournalEntry = {
  id: string
  user_id: string
  title: string | null
  content: string
  mood: string | null
  tags: string[]
  created_at: string
  updated_at: string
}

export type Subscription = {
  user_id: string
  plan: 'free' | 'premium'
  status: string
  current_period_end: string | null
}

export type ChatMode =
  | 'chat'
  | 'starter'
  | 'what_to_say'
  | 'relationship'
  | 'intimacy'
  | 'tonight'
  | 'tomorrow'
  | 'improve'
  | 'learn'

export const GOAL_OPTIONS = [
  { id: 'dating', label: 'Dating' },
  { id: 'conversations', label: 'Starting conversations' },
  { id: 'flirting', label: 'Flirting' },
  { id: 'relationship', label: 'Relationship' },
  { id: 'confidence', label: 'Confidence' },
  { id: 'intimacy', label: 'Intimacy' },
  { id: 'sexual-health', label: 'Sexual-health questions' },
  { id: 'communication', label: 'Communication' },
  { id: 'all', label: 'All of the above' },
] as const

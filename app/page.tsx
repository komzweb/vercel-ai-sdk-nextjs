'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="space-y-1">
        {messages.map((m) => (
          <div key={m.id}>
            <span>{m.role === 'user' ? '👤' : '🤖'}: </span>
            <span className={m.role === 'user' ? 'text-blue-400' : ''}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            className="w-full rounded px-2 py-1 text-gray-900 focus:outline-0"
          />
        </form>
      </div>
    </main>
  )
}

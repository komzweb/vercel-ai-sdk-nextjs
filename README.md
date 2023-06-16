# Vercel AI SDK Next.js Example

An example of building an AI chat app using the [Vercel AI SDK](https://github.com/vercel-labs/ai) and [Next.js](https://nextjs.org/)

## Setup

1. Clone the repo:

```bash
git clone https://github.com/komzweb/vercel-ai-sdk-nextjs.git
```

2. Add your OpenAI API key:

```bash
cd vercel-ai-sdk-nextjs
cp .env.local.example .env.local
```

Set your secret API key to `OPENAI_API_KEY` in the `.env.local` file.

3. Install dependencies:

```bash
npm install
```

4. Run the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
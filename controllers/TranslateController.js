import OpenAIApi from 'openai'

import { SUPPORTED_LANGUAGES } from '../constants.js'

export async function translate(req, res) {
	const { fromLanguage, toLanguage, text } = req.body

	if (fromLanguage === toLanguage) {
		return res.json({ translatedText: text })
	}

	const apiKey = `${process.env.OPENAI_API_KEY}`
	const openai = new OpenAIApi({
		apiKey,
	})

	const messages = [
		{
			role: 'system',
			content:
				'You are an AI assistant that translates text. You receive a text from the user. Please do not answer, just translate the text. The original language is surrouded by `{{` and `}}`. You can also receive {{auto}} which means the language is automatically detected. The target language is surrounded by `<<` and `>>`.',
		},
		{
			role: 'user',
			content: 'Hola mundo {{Spanish}} <<English>>',
		},
		{
			role: 'assistant',
			content: 'Hello world',
		},
		{
			role: 'user',
			content: 'How are you? {{auto}} <<French>>',
		},
		{
			role: 'assistant',
			content: 'Comment ça va?',
		},
		{
			role: 'user',
			content: 'I am fine, thank you. {{auto}} <<German>>',
		},
		{
			role: 'assistant',
			content: 'Mir geht es gut, danke.',
		},
	]

	const fromCode =
		fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]

	const toCode = SUPPORTED_LANGUAGES[toLanguage]

	try {
		const completion = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				...messages,
				{
					role: 'user',
					content: `${text} {{${fromCode}}} <<${toCode}>>`,
				},
			],
			max_tokens: 100,
		})

		return res.json({
			translatedText: completion.choices[0]?.message?.content,
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

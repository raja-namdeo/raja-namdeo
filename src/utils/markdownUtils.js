import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// This function parses the Markdown content
export const parseMarkdown = async (markdown) => {
	const { data, content } = matter(markdown)
	const processedContent = await remark().use(html).process(content)
	
	return {
		...data,
		content: processedContent.toString()
	}
}

// This function is used to sort posts by their date
export const sortPostsByDate = (posts) => {
	return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

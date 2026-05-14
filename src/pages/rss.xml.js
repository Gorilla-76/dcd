import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const issues = await getCollection("newsletter");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: issues
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.map((issue) => ({
				title: `#${String(issue.data.issue).padStart(3, "0")} — ${issue.data.title}`,
				description: issue.data.description,
				pubDate: issue.data.pubDate,
				link: `/archive/${issue.id}/`,
			})),
	});
}

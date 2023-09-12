"use client"
import usePagePath from '@/app/lib/hooks/usePagePath';
import { getPageData, getPages } from '@/app/lib/services';
import { getPageQuery } from '@/app/utils/helpers';
import { TPagePath } from '@/types';

export async function generateStaticParams() {
  const pages = await getPages()
 
  return [pages].map((page) => ({
    slug: page.slug,
  }))
}

const Page = ({params: {lang, slug}}: {params: {lang: string, slug: string}}) => {
	console.log("slug", slug);
	
	// const { noLocalizedPath, locale }: TPagePath = usePagePath();
  // const pageQery = getPageQuery("projects", locale);
  // const [pageData] = await getPageData(pageQery)
  // console.log("noLocalizedPath",noLocalizedPath);
	// console.log(pageData);
	

	return (
		<div style={{"marginTop": "100px"}}>{slug}</div>
	)
}

export default Page
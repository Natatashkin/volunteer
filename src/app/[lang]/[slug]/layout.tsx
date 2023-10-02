import React, { ReactNode } from 'react'

const MainPagesLayout = ({children, params}: {children: ReactNode, params: {lang: string}}) => {
	return (
		<div>
			<h1>MainPagesLayout</h1>
			{children}
		</div>
	)
}

export default MainPagesLayout;
import Link from 'next/link';
import './Header.scss';

export default () => (
	<header className="app_header">
		<h1>NextJS + KoaJS</h1>
		<ul>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/api-demo">
				<a>Api Demo</a>
			</Link>
		</ul>
	</header>
);

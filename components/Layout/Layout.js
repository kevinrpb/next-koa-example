import Header from '../Header/Header';
import './Layout.scss';

const Layout = props => (
	<div className="app_root">
		<Header />
		<main className="app_main">{props.children}</main>
	</div>
);

export default Layout;

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

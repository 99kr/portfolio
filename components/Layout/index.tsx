import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>99kr</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

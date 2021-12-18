import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>99kr</title>
			</Head>

			<img src="/illustrations/selection-border.svg" />
			<img src="/illustrations/wave-blob.svg" />
			<img src="/illustrations/juggle-blob.svg" />
			<h1 className="font-beauty text-white text-2xl">hej</h1>
			<h1 className="font-storytime text-white text-2xl">hej</h1>
		</div>
	);
};

export default Home;

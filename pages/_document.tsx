import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" />
				</Head>
				<body className="bg-background">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

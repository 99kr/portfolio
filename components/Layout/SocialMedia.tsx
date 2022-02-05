interface SocialMediaProps {
	brand: string;
	title: string;
	href: string;
}

const SocialMedia = ({ brand, title, href }: SocialMediaProps) => {
	return (
		<a
			className="bg-background-10 w-10 h-10 flex justify-center items-center rounded-full transition-colors text-accent-light/75 hover:text-accent-light hover:bg-background-15"
			target="_blank"
			href={href}
			rel="noreferrer"
			title={`${brand}: ${title}`}
		>
			<i className={`fab fa-${brand.toLowerCase()}`} />
		</a>
	);
};

export default SocialMedia;

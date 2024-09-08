import Navbar from "../navbar";
export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}

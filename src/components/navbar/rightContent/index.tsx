import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import { type ReactElement } from "react";
import AuthModal from "../../modal/auth/authModal";
import AuthButtons from "./authButtons";

export interface indexProps {
	user: User;
}

export default function index({ user }: indexProps): ReactElement {
	return (
		<>
			<AuthModal />
			<Flex justify="center" align="center">
				{user ? (
					<Button onClick={() => signOut(auth)}>Log Out</Button>
				) : (
					<AuthButtons />
				)}
			</Flex>
		</>
	);
}

import { Button } from "@chakra-ui/react";
import { type ReactElement } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

export default function authButtons(): ReactElement {
	const setAuthModalState = useSetRecoilState(authModalState);
	return (
		<>
			<Button
				variant="outline"
				height="28px"
				display={{ base: "none", sm: "flex" }}
				width={{ base: "70px", md: "110px" }}
				mr={2}
				onClick={() => setAuthModalState({ open: true, view: "login" })}
			>
				Log In
			</Button>

			<Button
				height="28px"
				display={{ base: "none", sm: "flex" }}
				width={{ base: "70px", md: "110px" }}
				mr={2}
				onClick={() => setAuthModalState({ open: true, view: "signup" })}
			>
				Sign Up
			</Button>
		</>
	);
}

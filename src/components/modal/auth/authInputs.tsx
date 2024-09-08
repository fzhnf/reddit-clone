import { authModalState } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import { type ReactElement } from "react";
import { useRecoilValue } from "recoil";
import Login from "./login";
import SignUp from "./signup";

export interface authInputsProps {}

export default function authInputs(): ReactElement {
	const modalState = useRecoilValue(authModalState);
	return (
		<Flex direction="column" align="center" width="100%" mt={4}>
			{modalState.view === "login" && <Login />}
			{modalState.view === "signup" && <SignUp />}
		</Flex>
	);
}

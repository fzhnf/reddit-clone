import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import {
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import { ReactElement, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import AuthInputs from "./authInputs";
import OAuthButtons from "./OAuthButtons";

export default function authmodal(): ReactElement {
	const [modalState, setModalState] = useRecoilState(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const handleClose = () => {
		setModalState((prev) => ({
			...prev,
			open: false,
		}));
	};

	useEffect(() => {
		if (user) handleClose();
		console.log("user", user);
	}, [user]);
	return (
		<>
			<Modal isOpen={modalState.open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign="center">
						{modalState.view == "login" && "Log In"}
						{modalState.view == "signup" && "Sign Up"}
						{modalState.view == "resetPassword" && "Reset Password"}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyItems="center"
						pb={6}
					>
						<Flex
							direction="column"
							align="center"
							justify="center"
							width="70%"
						>
							<OAuthButtons />
							<Text color="gray.500" fontWeight={700}>
								OR
							</Text>
							<AuthInputs />
							{/* <resetPassword/> */}
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

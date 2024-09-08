import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState, type ReactElement } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

export interface loginProps {}

export default function login(): ReactElement {
	const setAuthModalState = useSetRecoilState(authModalState);
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const [signInWithEmailAndPassword, user, loading, userError] =
		useSignInWithEmailAndPassword(auth);

	// Firebase
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError("");
		signInWithEmailAndPassword(loginForm.email, loginForm.password);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		// update form state
		setLoginForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	return (
		<form onSubmit={onSubmit}>
			<Input
				required
				name="email"
				placeholder="email"
				type="email"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: "gray.500" }}
				_hover={{
					outline: "none",
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				bg="gray.50"
			/>
			<Input
				required
				name="password"
				placeholder="password"
				type="password"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: "gray.500" }}
				_hover={{
					outline: "none",
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				bg="gray.50"
			/>
			<Text textAlign="center" color="red" fontSize="10pt">
				{error ||
					FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS] ||
					userError?.message}
			</Text>
			<Button
				width="100%"
				height="36px"
				mt={2}
				mb={2}
				type="submit"
				isLoading={loading}
			>
				Log In
			</Button>
			<Flex fontSize="9pt" justifyContent="center">
				<Text mr={1}>New here?</Text>
				<Text
					color="blue.500"
					fontWeight={700}
					cursor="pointer"
					onClick={() =>
						setAuthModalState((prev) => ({ ...prev, view: "signup" }))
					}
				>
					SIGN UP
				</Text>
			</Flex>
		</form>
	);
}

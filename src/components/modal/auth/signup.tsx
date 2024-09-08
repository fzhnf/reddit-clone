import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import {
	ChangeEvent,
	FormEvent,
	useState,
	type ReactElement,
	type ReactNode,
} from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

export interface signupProps {
	children: ReactNode;
}

export default function signup(): ReactElement {
	const setAuthModalState = useSetRecoilState(authModalState);
	const [signUpForm, setSignUpForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const [createUserWithEmailAndPassword, user, loading, userError] =
		useCreateUserWithEmailAndPassword(auth);

	// Firebase
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError("");
		if (signUpForm.password !== signUpForm.confirmPassword) {
			setError("Password do not match");
			return;
		}
		// password match
		createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		// update form state
		setSignUpForm((prev) => ({
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
			<Input
				required
				name="confirmPassword"
				placeholder="confirm password"
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
				Sign Up
			</Button>
			<Flex fontSize="9pt" justifyContent="center">
				<Text mr={1}>Already have Account?</Text>
				<Text
					color="blue.500"
					fontWeight={700}
					cursor="pointer"
					onClick={() =>
						setAuthModalState((prev) => ({ ...prev, view: "login" }))
					}
				>
					LOG IN
				</Text>
			</Flex>
		</form>
	);
}

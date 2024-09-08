import { auth } from "@/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { type ReactElement } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function OAuthButtons(): ReactElement {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	return (
		<Flex direction="column" width="100%" mb={4}>
			<Button
				variant="oauth"
				mb={2}
				isLoading={loading}
				onClick={() => signInWithGoogle()}
			>
				<Image src="/img/googlelogo.png" height="20px" mr={4}></Image>
				Sign in with Google
			</Button>
			<Button variant="oauth">Some Other Provider</Button>
			{error && <Text>{error.message}</Text>}
		</Flex>
	);
}

import { auth } from "@/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./rightContent/index";
import SearchInput from "./searchInput";

export default function layout() {
	const [user, loading, error] = useAuthState(auth);
	return (
		<Flex bg="white" height="44px" padding="6px 12px">
			<Flex align="center">
				<Image src="img/linkedInFace.svg" height="30px" />
				<Image
					src="img/redditText.svg"
					height="40px"
					display={{ base: "none" }}
				/>
			</Flex>
			<SearchInput />
			{/* <Directory />*/}
			<RightContent user={user} />
		</Flex>
	);
}

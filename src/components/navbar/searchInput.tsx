import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { type ReactElement, type ReactNode } from "react";

export interface searchInputProps {
	children: ReactNode;
}

export default function searchInput(): ReactElement {
	return (
		<Flex flexGrow={1} mr={2} align="center">
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.400" />}
					mb={1}
				/>
				<Input
					placeholder="Search linkedIn"
					fontSize="10pt"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					height="34px"
					bg="gray.50"
				/>
			</InputGroup>
		</Flex>
	);
}

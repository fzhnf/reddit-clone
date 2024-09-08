// app/providers.tsx
"use client";

import { theme } from "@/chakra/theme";
import Layout from "@/components/layout";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<RecoilRoot>
			<CacheProvider>
				<ChakraProvider theme={theme}>
					<Layout>{children}</Layout>
				</ChakraProvider>
			</CacheProvider>
		</RecoilRoot>
	);
}

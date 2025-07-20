"use client"

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-sora), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" },
        body: { value: "var(--font-zen-maru-gothic), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

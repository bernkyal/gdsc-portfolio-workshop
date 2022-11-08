import { Heading, Box } from "@chakra-ui/react";
import { Highlight } from '@chakra-ui/react'

export default function Menu() {
  return (
    <Heading lineHeight='tall'>
  <Highlight
    query='spotlight'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
  >
    With the Highlight component, you can spotlight words.
  </Highlight>
</Heading>
  )
}
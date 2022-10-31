import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export default function CustomButton ({ title, link, id }) {
  return (
    <Box>
      <Button color-scheme='#EAECF0' id={id} width='1152px' height='76px'>
        <a href={link} target='_blank' rel='noreferrer'>
          {title}
        </a>
      </Button>
    </Box>
  )
}

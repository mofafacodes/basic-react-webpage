import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  Image
} from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { data } from '../utils/constants'
import MyImage from '../assets/images/nutifafa.png'
import ZuriImage from '../assets/images/zuri-internship.png'
import I4GImage from '../assets/images/I4G.png'
import { GitHubIcon, SlackIcon } from '../theme/customIcons'

const Webpage = () => {
  return (
    <Flex
      direction='column'
      bg='white'
      minH='100%'
      py={10}
      justify='center'
      w='100%'
    >
      <Box align='center' mb={10}>
        <Avatar name='Nutifafa' src={MyImage} id='profile_img' boxSize={20} />
        <Heading as='h6' fontSize='20px' mt={5}>
          Nutifafa Kpodo
        </Heading>
      </Box>
      <Grid template='repeat(6, 1fr)' mx='auto' gap={5}>
        {data?.map(item => (
          <GridItem key={item.id}>
            <CustomButton
              title={item?.title}
              link={item?.link}
              id={item?.btn_id}
            />
          </GridItem>
        ))}
      </Grid>
      <Flex my={10} direction='row' justify='center' gap={5}>
        <Icon as={SlackIcon} boxSize={6} />
        <Icon as={GitHubIcon} boxSize={6} />
      </Flex>
      <Flex
        borderTopColor={'#EAECF0'}
        borderTopWidth={1}
        direction='row'
        justify='space-between'
        py={5}
        mx={20}
        mt={20}
      >
        <Image src={ZuriImage} sze='sm' />
        <Text color='#667085'> HNG Internship 9 Frontend Task</Text>
        <Image src={I4GImage} />
      </Flex>
    </Flex>
  )
}

export default Webpage

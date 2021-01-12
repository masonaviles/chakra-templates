import Link from 'next/link';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoMoon,
  IoSunny,
  IoMenu,
} from 'react-icons/io5';

import { DISCORD_INVITE_LINK, GITHUB_LINK } from '../constants';
import { TextUnderline } from '@/components/TextUnderline';
import { Logo } from '@/components/Logo';

interface HeaderBarProps {
  showBorder?: boolean;
  showNavButton?: boolean;
  onMenuButtonClick?: () => void;
}

export const HeaderBar = ({
  showBorder = false,
  showNavButton = false,
  onMenuButtonClick,
}: HeaderBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={
        showBorder ? useColorModeValue('gray.100', 'gray.900') : 'transparent'
      }>
      <Stack
        as={Container}
        maxW={'7xl'}
        py={4}
        direction={'row'}
        spacing={4}
        justify={'space-between'}
        align={'center'}>
        <Link href={'/'} passHref>
          <Stack as={'a'} direction={'row'} alignItems={'center'} spacing={4}>
            <Icon as={Logo} w={8} h={8} />
            <Heading as={'h1'} size={'md'}>
              <TextUnderline>Chakra</TextUnderline> Templates
            </Heading>
          </Stack>
        </Link>
        <Stack
          direction={'row'}
          spacing={{ base: 2, sm: 4 }}
          color={'gray.500'}>
          <IconButton
            size={'sm'}
            as={'a'}
            href={GITHUB_LINK}
            target={'_blank'}
            variant={'ghost'}
            aria-label={'GitHub'}
            icon={<IoLogoGithub size={18} />}
          />
          <IconButton
            size={'sm'}
            as={'a'}
            href={DISCORD_INVITE_LINK}
            target={'_blank'}
            variant={'ghost'}
            aria-label={'Discord'}
            icon={<IoLogoDiscord size={18} />}
          />
          <IconButton
            size={'sm'}
            variant={'ghost'}
            aria-label={'Toggle Color Mode'}
            onClick={toggleColorMode}
            icon={
              colorMode == 'light' ? (
                <IoMoon size={18} />
              ) : (
                <IoSunny size={18} />
              )
            }
          />
          {showNavButton && (
            <IconButton
              display={{ base: 'inline-flex', lg: 'none' }}
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              onClick={onMenuButtonClick}
              icon={<IoMenu size={18} />}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

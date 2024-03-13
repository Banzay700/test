import { Divider, Stack, Typography } from '@mui/material'

import { FriendsSidebarItem } from './FriendsSidebarItem'
import { Footer } from '../../layout/Footer'
import { sidebarItemsMap } from './FriendsMainSidebar.utils'
import {
  SidebarHeaderWrapper,
  SidebarWrapper,
} from './FriendsMainSidebar.styled'

const FriendsMainSidebar = () => {
  return (
    <SidebarWrapper>
      <Stack>
        <SidebarHeaderWrapper>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Typography fontSize="24px" fontWeight="600">
              Friends
            </Typography>
          </Stack>
        </SidebarHeaderWrapper>
        <Stack gap="2px" marginTop="8px">
          {sidebarItemsMap.map((item) => (
            <FriendsSidebarItem key={item.to} {...item} />
          ))}
        </Stack>
        <Divider orientation="horizontal" sx={{ my: '8px' }} />
      </Stack>

      <Footer />
    </SidebarWrapper>
  )
}

FriendsMainSidebar.displayName = 'FriendsMainSidebar'

export default FriendsMainSidebar

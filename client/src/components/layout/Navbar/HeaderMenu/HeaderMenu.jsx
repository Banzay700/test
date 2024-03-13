import PropTypes from 'prop-types'
import { Stack, Drawer } from '@mui/material'

import { HeaderMenuItem } from './HeaderMenuItem'
import { MenuContentContainer } from './HeaderMenu.styled.js'
import { menuItems } from './HeaderMenu.utils.jsx'
import { Footer } from '../../Footer'

const HeaderMenu = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
      }}
    >
      <MenuContentContainer>
        <Stack gap="8px">
          {menuItems.map(({ id, ...item }) => (
            <HeaderMenuItem key={id} {...item} />
          ))}
        </Stack>
        <Stack width="100%" alignItems="center">
          <Footer />
        </Stack>
      </MenuContentContainer>
    </Drawer>
  )
}

HeaderMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

HeaderMenu.displayName = 'HeaderMenu'

export default HeaderMenu

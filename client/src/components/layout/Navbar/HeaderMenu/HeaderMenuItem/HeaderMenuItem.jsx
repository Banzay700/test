import PropTypes from 'prop-types'
import { MenuItemWrapper } from './HeaderMenuItem.styled.js'
import { Typography, useTheme } from '@mui/material'
import { useLocation } from 'react-router-dom'

const HeaderMenuItem = ({ title, Icon, IconActive, to }) => {
  const { pathname } = useLocation()
  const { palette } = useTheme()

  return (
    <MenuItemWrapper to={to}>
      {pathname === to ? (
        <IconActive size={34} color={palette.primaryButtonBackground} />
      ) : (
        <Icon size={34} />
      )}
      <Typography fontSize="26px">{title}</Typography>
    </MenuItemWrapper>
  )
}

HeaderMenuItem.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.elementType,
  IconActive: PropTypes.elementType,
  to: PropTypes.string,
}

HeaderMenuItem.displayName = 'HeaderMenuItem'

export default HeaderMenuItem

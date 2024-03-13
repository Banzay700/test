import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const MenuItemWrapper = styled(Link)(({ theme }) => ({
  display: 'flex',
  padding: '15px 20px 15px 40px',
  cursor: 'pointer',
  transition: '0.2s ease-in-out',
  flexDirection: 'row',
  gap: '18px',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.lightGrey,
  },
}))

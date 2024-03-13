import { Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Stack gap="8px" alignItems="center" justifyContent="center">
      <Typography fontSize="14px" color="text.grey">
        Privacy · Terms · Advertising · Cookies · More
      </Typography>
      <Typography fontSize="14px" color="text.grey">
        © 2023 ISocial, Inc. All rights reserved.
      </Typography>
    </Stack>
  )
}

export default Footer

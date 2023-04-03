import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge({badge}) {
  // console.log(badge)
  return (
    <Badge badgeContent={badge} color={badge>7.5?'primary':'secondary'}>
      {/* <MailIcon color="action" /> */} 
    </Badge>
  );
}
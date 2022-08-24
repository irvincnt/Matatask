import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Entry } from '../../interfaces'

interface Props {
  entry: Entry
}

export const EntryCard:FC<Props> = ({entry}) => {
  return (
    <Card sx={{margin: '5px 5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

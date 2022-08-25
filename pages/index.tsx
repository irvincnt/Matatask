import { Card, CardHeader, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { EntryList } from '../components/ui'
import { NewEntry } from '../components/ui'

const Home: NextPage = () => {
  return (
    <Layout title='Home - Open Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes"></CardHeader>
            <NewEntry></NewEntry>
            <EntryList status='pending'></EntryList>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title="En Progreso"></CardHeader>
            <EntryList status='in-progress'></EntryList>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas"></CardHeader>
            <EntryList status='finished'></EntryList>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default Home

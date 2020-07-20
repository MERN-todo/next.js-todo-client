import Layout from '../containers/layout'
import { serverToChartFormat } from '../utils/utilFunctions'
import { serverUrl } from '../config'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function Stats ({ stats }) {
  return (
    <Layout title='Task Stats'>
      <div>
        <ResponsiveContainer width='100%' height={500}>
          <BarChart
            width={1000}
            height={600}
            data={stats}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis
              label={{ value: 'Tasks', angle: -90, position: 'insideLeft' }}
              allowDecimals={false}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey='Complete' stackId='a' fill='#82ca9d' />
            <Bar dataKey='Incomplete' stackId='a' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  )
}

Stats.getInitialProps = async ({ req }) => {
  const res = await fetch(`${serverUrl}/api/v1/tasks`)
  const json = await res.json()
  const chartFormat = serverToChartFormat(json)
  return { stats: chartFormat }
}

import React from 'react'
import { gql, useQuery } from '@apollo/client'
import TableContainer from './TableContainer'
import AllEventsTable from './AllEventsTable'
import moment from 'moment'
import { typeMap } from '../../utils/constants'
import Collapse from '@material-ui/core/Collapse'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'
import Love from '../../images/love.svg'
import { Tabs, Layout } from 'antd'
import { NavBar } from '../NavBar'
const { Header, Content, Footer, Sider } = Layout

const { TabPane } = Tabs

const GET_EVENTS = gql`
    query Events {
        getEventsByUserId {
            userId
            id
            type
            date
        }
    }
`

const mapKey = (data) => {
    return data.map((item) => ({
        ...item,
        key: item.id,
    }))
}

const Events = () => {
    const { loading, error, data } = useQuery(GET_EVENTS)

    if (loading) return 'loading'
    if (error) return <p>{error}</p>
    const newData = mapKey(data.getEventsByUserId)

    return (
        <div>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Active events" key="1">
                    <TableContainer data={newData} />
                </TabPane>
                <TabPane tab="Past events" key="2">
                    <TableContainer data={newData} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Events

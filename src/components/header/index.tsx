import React from 'react'
import { Layout, Space, Typography, Button } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import styles from './index.module.css'

export const Header = () => {
    return (
        <Layout.Header className={styles.Header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Button type='link'>Click</Button>
            </Space>
        </Layout.Header>
    )
}

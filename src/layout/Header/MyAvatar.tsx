import useUserStore from '@/store/user'
import { Dropdown, Avatar, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function MyAvatar() {
  const { userInfo } = useUserStore()
  const navigate = useNavigate()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span className='dropdown-item'>首页</span>,
      onClick: () => navigate('/home/index')
    },
    {
      key: '2',
      label: <span className='dropdown-item'>个人信息</span>
      // onClick: () => infoRef.current!.showModal({ name: 11 })
    },
    {
      key: '3',
      label: <span className='dropdown-item'>修改密码</span>
      // onClick: () => passRef.current!.showModal({ name: 11 })
    },
    {
      type: 'divider'
    },
    {
      key: '4',
      label: <span className='dropdown-item'>退出登录</span>,
      // onClick: logout
      danger: true
    }
  ]

  return (
    <>
      <span style={{ marginRight: 24 }}>{userInfo.name}</span>
      <Dropdown menu={{ items }} placement='bottom' arrow trigger={['click']}>
        <Avatar src={userInfo.avatar} />
      </Dropdown>
      {/* <InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal> */}
    </>
  )
}

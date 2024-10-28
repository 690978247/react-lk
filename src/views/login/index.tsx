import { getCaptcha, login } from '@/services/login'
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormText
} from '@ant-design/pro-components'
// import { FormattedMessage, history, useIntl, useModel } from '@umijs/max'
import { Alert, message } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
// import { flushSync } from 'react-dom'

// 登录样式
import './index.less'
const LoginMessage: React.FC<{
  content: string
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24
      }}
      message={content}
      type='error'
      showIcon
    />
  )
}

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({})
  const [type, setType] = useState<string>('account')
  // const { initialState, setInitialState } = useModel('@@initialState')

  // const intl = useIntl()
  const formRef = useRef<any>()
  const fetchUserInfo = async () => {
    // const userInfo = await initialState?.fetchUserInfo?.()
    // if (userInfo) {
    //   flushSync(() => {
    //     setInitialState((s) => ({
    //       ...s,
    //       currentUser: { ...userInfo }
    //     }))
    //   })
    // }
  }

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      const { captcha, password, userName } = {
        ...values,
        userName: values.userName?.trim(),
        captcha: values.captcha?.trim()
      }
      // 登录
      const msg = await login({ captcha, password, userName })
      if (msg.success) {
        localStorage.clear()
        // msg.data.avatar = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        window?.localStorage.setItem('token', msg.data.token)
        window?.localStorage.setItem('userId', msg.data.userId)
        window?.localStorage.setItem('userName', msg.data.userName)
        // const defaultLoginSuccessMessage = intl.formatMessage({
        //   id: 'pages.login.success',
        //   defaultMessage: '登录成功！'
        // })
        await fetchUserInfo()

        message.success(defaultLoginSuccessMessage)
        const urlParams = new URL(window.location.href).searchParams
        // history.push(urlParams.get('redirect') || '/')
        window.location.reload()
        return
      }
      // 如果失败去设置用户错误信息
      // setUserLoginState(msg);
    } catch (error) {
      message.error('登录失败')
    } finally {
    }
  }
  const { status, type: loginType } = userLoginState

  useEffect(() => {
    localStorage.removeItem('tabPages')
  }, [])

  return (
    <div
      style={{
        height: '100vh'
      }}
    >
      {/* https://file.toprisers.com/sm/516d84c7-ceca-4037-8f0f-2887bc5d8de6_loginbg.png */}
      {/* <LoginFormPage
        backgroundImageUrl='http://sumaieshop.oss-cn-hangzhou.aliyuncs.com/web/1715750268052_loginbg.png'
        containerStyle={{
          backgroundColor: 'white',
          backgroundImage: 'none',
          borderRadius: '24px',
          padding: '40px 26px 64px'
        }}
        style={{
          backgroundSize: '100% 100%'
        }}
        title='Shopping Mall'
        initialValues={{
          autoLogin: true
        }}
        formRef={formRef}
        onFinish={async (values) => {
          await handleSubmit(values as API.LoginParams)
        }}
      >
        <>
          <ProFormText
            name='userName'
            placeholder={intl.formatMessage({
              id: 'pages.login.username.placeholder',
              defaultMessage: '用户名'
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id='pages.login.username.required'
                    defaultMessage='请输入用户名!'
                  />
                )
              }
            ]}
          />
          <ProFormText.Password
            name='password'
            placeholder={intl.formatMessage({
              id: 'pages.login.password.placeholder',
              defaultMessage: '密码'
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id='pages.login.password.required'
                    defaultMessage='请输入密码！'
                  />
                )
              }
            ]}
          />
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              style: { borderRadius: '36px' }
            }}
            captchaProps={{
              size: 'large',
              type: 'primary'
            }}
            countDown={30}
            name='captcha'
            placeholder='请输入钉钉验证码'
            onGetCaptcha={async (params) => {
              console.log('params', params)
              // return new Promise((resolve, reject) => {
              const { success, msg } = await getCaptcha({
                userName: formRef.current.getFieldValue('userName')?.trim()
              })
              if (success) {
                message.success('发送成功')
              } else {
                throw new Error(msg)
              }
              // })
            }}
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `倒计时${count}`
              }
              return '发送'
            }}
            rules={[
              {
                required: true,
                message: '验证码必填'
              }
            ]}
          />
        </>
      </LoginFormPage> */}
    </div>
  )
}

export default Login

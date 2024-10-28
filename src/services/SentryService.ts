import * as Sentry from '@sentry/react'
import releaseConfig from '../../releaseConfig'

class SentryService {
  private static instance: SentryService

  private constructor() {
    this.init()
  }

  private enabled: boolean = true

  public static getInstance(): SentryService {
    if (!SentryService.instance) {
      SentryService.instance = new SentryService()
    }
    return SentryService.instance
  }

  private init() {
    console.log('【Sentry】env : ', process.env)
    const { NODE_ENV } = process.env
    if (NODE_ENV === 'development') {
      console.log('【Sentry】检测到开发环境,关闭Sentry')
      this.enabled = false
      return
    }
    this.enabled = true

    console.log('【Sentry】Project Version:', releaseConfig.version)

    Sentry.init({
      // Sentry DSN (Data Source Name)，用于标识项目和接收数据
      dsn: SENTRY_KEY,
      release: releaseConfig.version,
      // 配置 Sentry 集成
      integrations: [
        // 浏览器追踪集成，用于性能监控
        Sentry.browserTracingIntegration(),
        // 会话重放集成，用于录制用户会话
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],

      // 性能监控采样率，设置为 1.0 表示捕获 100% 的事务
      tracesSampleRate: 1.0,

      // 控制在哪些 URL 上启用分布式追踪
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

      // 会话重放采样率，设置为 0.1 表示采样 10% 的会话
      replaysSessionSampleRate: 0.1,

      // 错误会话重放采样率，设置为 1.0 表示在发生错误时采样 100% 的会话
      replaysOnErrorSampleRate: 1.0,
    })

    console.log('【Sentry】init ✅')
  }

  /**
   * 捕获异常错误并发送到 Sentry
   * @param error 错误对象
   */
  public captureException(error: Error) {
    if (!this.enabled) {
      return
    }
    Sentry.captureException(error)
    console.log('【Sentry】captureException ： ', error)
  }

  /**
   * 捕获消息并发送到 Sentry
   * @param message 消息字符串
   */
  public captureMessage(message: any) {
    if (!this.enabled) {
      return
    }
    Sentry.captureMessage(message)
    console.log('【Sentry】captureMessage ： ', message)
  }

  /**
   * 添加面包屑信息到 Sentry
   * @param breadcrumb 面包屑对象
   */
  public addBreadcrumb(breadcrumb: Sentry.Breadcrumb) {
    if (!this.enabled) {
      return
    }
    Sentry.addBreadcrumb(breadcrumb)
    console.log('【Sentry】breadcrumb ： ', breadcrumb)
  }

  /**
   * 设置用户信息到 Sentry
   * @param user 用户对象
   */
  public setUser(user: Sentry.User) {
    if (!this.enabled) {
      return
    }
    Sentry.setUser(user)
    console.log('【Sentry】setUser ： ', user)
  }
}

export default SentryService

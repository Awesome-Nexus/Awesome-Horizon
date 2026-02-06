export type EmailProvider = 'resend' | 'sendgrid' | 'mailgun' | 'smtp' | 'console'

export interface EmailConfig {
  provider: EmailProvider
  apiKey?: string
  from?: string
  fromName?: string
}

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
  replyTo?: string
}

export interface EmailTemplate {
  name: string
  subject: string
  html: string
}

export const emailTemplates: Record<string, EmailTemplate> = {
  welcome: {
    name: 'Welcome to Awesome Horizon',
    subject: 'Welcome to Awesome Horizon!',
    html: `
      <h1>Welcome aboard! 🎉</h1>
      <p>Thank you for joining Awesome Horizon, your gateway to quality STEAM education resources.</p>
      <p>Start exploring:</p>
      <ul>
        <li><a href="/science">Science</a> - Physics, Chemistry, Biology</li>
        <li><a href="/technology">Technology</a> - AI, Web Dev, Data Science</li>
        <li><a href="/mathematics">Mathematics</a> - Calculus, Algebra, Statistics</li>
      </ul>
      <p>Happy learning!</p>
    `
  },
  newsletter: {
    name: 'Newsletter',
    subject: 'Your Weekly STEAM Digest',
    html: `
      <h1>Your Weekly STEAM Digest 📚</h1>
      <p>Here are the latest resources added to Awesome Horizon:</p>
      <ul>
        <li>MIT OpenCourseWare - Free online courses</li>
        <li>Khan Academy - Personalized learning</li>
        <li>3Blue1Brown - Math visualizations</li>
      </ul>
      <p><a href="/">Explore more →</a></p>
    `
  },
  resourceAlert: {
    name: 'Resource Update',
    subject: 'New Resources Available',
    html: `
      <h1>New Resources Available 🚀</h1>
      <p>We've added new learning materials to Awesome Horizon:</p>
      <ul>
        <li>Interactive Physics Simulations</li>
        <li>Machine Learning Courses</li>
        <li>Calculus Tutorials</li>
      </ul>
      <p><a href="/">Start learning now →</a></p>
    `
  },
  passwordReset: {
    name: 'Password Reset',
    subject: 'Reset Your Password',
    html: `
      <h1>Password Reset Request</h1>
      <p>You requested to reset your password. Click the link below to create a new password:</p>
      <p><a href="{resetLink}">Reset Password</a></p>
      <p>This link expires in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `
  }
}

export const useEmail = () => {
  const config = useRuntimeConfig()

  const emailSettings = computed(() => ({
    provider: (config.public.emailProvider as EmailProvider) || 'console',
    apiKey: config.public.emailApiKey as string,
    from: config.public.emailFrom as string || 'noreply@awesome-horizon.vercel.app',
    fromName: config.public.emailFromName as string || 'Awesome Horizon'
  }))

  const send = async (options: EmailOptions): Promise<{ success: boolean; message: string }> => {
    const settings = emailSettings.value

    if (settings.provider === 'console') {
      console.log('📧 Email (console mode):', {
        to: options.to,
        subject: options.subject,
        from: settings.from
      })
      return { success: true, message: 'Email logged to console' }
    }

    if (settings.provider === 'resend' && settings.apiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${settings.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: `${settings.fromName} <${settings.from}>`,
            to: options.to,
            subject: options.subject,
            html: options.html,
            text: options.text,
            reply_to: options.replyTo
          })
        })
        if (response.ok) {
          return { success: true, message: 'Email sent via Resend' }
        }
        return { success: false, message: 'Failed to send email' }
      } catch (error) {
        return { success: false, message: String(error) }
      }
    }

    return { success: false, message: 'Email provider not configured' }
  }

  const sendTemplate = async (
    to: string,
    templateName: string,
    variables: Record<string, string> = {}
  ): Promise<{ success: boolean; message: string }> => {
    const template = emailTemplates[templateName]
    if (!template) {
      return { success: false, message: `Template "${templateName}" not found` }
    }

    let html = template.html
    for (const [key, value] of Object.entries(variables)) {
      html = html.replace(new RegExp(`{${key}}`, 'g'), value)
    }

    return send({
      to,
      subject: template.subject,
      html
    })
  }

  return {
    settings: emailSettings,
    send,
    sendTemplate,
    templates: emailTemplates
  }
}

export const useWebSocket = (url: string, options: { autoConnect?: boolean } = {}) => {
  const { autoConnect = true } = options

  const socket = ref<WebSocket | null>(null)
  const isConnected = ref(false)
  const lastMessage = ref<any>(null)
  const error = ref<Event | null>(null)
  const reconnectAttempts = ref(0)
  const MAX_RECONNECT_ATTEMPTS = 5
  const RECONNECT_DELAY = 3000

  const connect = () => {
    if (socket.value?.readyState === WebSocket.OPEN) {
      return
    }

    try {
      socket.value = new WebSocket(url)

      socket.value.onopen = () => {
        isConnected.value = true
        reconnectAttempts.value = 0
      }

      socket.value.onmessage = (event) => {
        try {
          lastMessage.value = JSON.parse(event.data)
        } catch {
          lastMessage.value = event.data
        }
      }

      socket.value.onerror = (event) => {
        error.value = event
      }

      socket.value.onclose = () => {
        isConnected.value = false
        if (reconnectAttempts.value < MAX_RECONNECT_ATTEMPTS) {
          reconnectAttempts.value++
          setTimeout(connect, RECONNECT_DELAY)
        }
      }
    } catch (err) {
      error.value = err as Event
    }
  }

  const disconnect = () => {
    if (socket.value) {
      socket.value.close()
      socket.value = null
      isConnected.value = false
    }
  }

  const send = (data: any) => {
    if (socket.value?.readyState === WebSocket.OPEN) {
      const payload = typeof data === 'string' ? data : JSON.stringify(data)
      socket.value.send(payload)
    }
  }

  const on = (event: string, callback: (data: any) => void) => {
    if (socket.value) {
      const handler = (e: MessageEvent) => {
        try {
          callback(JSON.parse(e.data))
        } catch {
          callback(e.data)
        }
      }
      socket.value.addEventListener(event, handler as EventListener)
    }
  }

  onMounted(() => {
    if (autoConnect) {
      connect()
    }
  })

  onUnmounted(() => {
    disconnect()
  })

  return {
    socket: readonly(socket),
    isConnected: readonly(isConnected),
    lastMessage: readonly(lastMessage),
    error: readonly(error),
    reconnectAttempts: readonly(reconnectAttempts),
    connect,
    disconnect,
    send,
    on
  }
}

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  timestamp: number
  read: boolean
}

export const useNotifications = () => {
  const notifications = ref<Notification[]>([])
  const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

  const add = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: Date.now(),
      read: false
    }
    notifications.value.unshift(newNotification)
    return newNotification.id
  }

  const remove = (id: string) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  const markAsRead = (id: string) => {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }

  const markAllAsRead = () => {
    notifications.value.forEach(n => {
      n.read = true
    })
  }

  const clear = () => {
    notifications.value = []
  }

  return {
    notifications: readonly(notifications),
    unreadCount,
    add,
    remove,
    markAsRead,
    markAllAsRead,
    clear
  }
}

export default function Notification({ notification }) {
  if (!notification) {
    return null
  }

  const className = notification.type === 'success' ? 'note' : 'error'

  return (
    <div className={className}>
      <p>{notification.message}</p>
    </div>
  )
}

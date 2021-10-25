import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online')

  useEffect(() => {
    window.addEventListener('offline', () => setStatus('offline'))
    return () => window.removeEventListener('offline', () => setStatus('offline'))
  }, [])

  useEffect(() => {
    window.addEventListener('online', () => setStatus('online'))
    return () => window.removeEventListener('online', () => setStatus('online'))
  })
  const statusClass = status === 'online' ? "status " : "status status_offline"

  return (
    <div className={statusClass}>{status}</div>
  )
}

export default ConnectionStatus
import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState('Online')

  useEffect(() => {
    window.addEventListener('offline', () => setStatus('Offline'))
    window.addEventListener('online', () => setStatus('Online'))
    return () => window.removeEventListener()

  }, [])

  const statusClass = status === 'Online' ? "status " : "status status_offline"

  return (
    <div className={statusClass}>{status}</div>
  )
}

export default ConnectionStatus
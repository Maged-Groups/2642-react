import { styles } from '@/assets/tailwind/Contacts'
import Location from './Location'
import Info from './Info'
import { useState } from 'react'

export default function Contacts() {

  const [tab, setTab] = useState('info')

  const handle_change_tab = newTab => setTab(newTab)

  const currentTab = () => {
    switch (tab) {
      case 'info': return <Info />
      case 'location': return <Location />
    }
  }

  return (
    <div>
      <h2>Contacts</h2>

      <div className={styles.container}>
        <button className={`${styles.link} ${tab === 'info' && 'text-red-400'} `} onClick={() => handle_change_tab('info')}>Contancts</button>

        <button className={`${styles.link} ${tab === 'location' && 'text-red-400'} `} onClick={() => handle_change_tab('location')}>Map</button>
      </div>

      <div>
        {currentTab()}
      </div>

    </div>
  )
}

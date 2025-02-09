import { Link, Outlet, useHref } from "react-router-dom";

import { styles } from '@/assets/tailwind/Services'

export default function Services() {

  const href = useHref()

  return (
    <div>

      <nav className={styles.nav}>
        <Link className={styles.link} to='/services'>All Services</Link>
        <Link className={styles.link} to='mobile'>Mobile Apps</Link>
        <Link className={styles.link} to='web'>Web Apps</Link>
        <Link className={styles.link} to='marketing'>Marketing</Link>
      </nav>

      <div className="p-4">
        {
          href === '/services'
            ?
            <>
              <h2>Services page</h2>
              <p><strong>Paragraph in Services page:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consequatur perferendis, officiis perspiciatis consequuntur magni est veniam minima debitis hic exercitationem impedit praesentium doloremque corrupti repellat quisquam, excepturi necessitatibus accusantium!</p>
            </>
            :
            <Outlet />
        }
      </div>
    </div>
  )
}

import { Link, Outlet } from "react-router-dom";

import { styles } from '@/assets/tailwind/About'
export default function About() {
  return (
    <div>
      <h2>About us page</h2>
      <p><strong>Paragraph in About page:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consequatur perferendis, officiis perspiciatis consequuntur magni est veniam minima debitis hic exercitationem impedit praesentium doloremque corrupti repellat quisquam, excepturi necessitatibus accusantium!</p>

      <nav className={styles.nav}>
        <Link className={styles.link} to='/about'>Main</Link>
        <Link className={styles.link} to='mission'>Mission</Link>
        <Link className={styles.link} to='vision'>Vision</Link>
      </nav>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

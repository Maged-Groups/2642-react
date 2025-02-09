import img404 from '@/assets/imgs/404.png'
import { styles } from '@/assets/tailwind/P404'

export default function P404() {
  return (
    <div className={styles.container}>
        <img src={img404} alt="" className={styles.img} />
    </div>
  )
}

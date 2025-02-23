import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

export default function Home() {
  return (

    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={520}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 0,
        }}
        speed={5000}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est repellat dolor fugiat dolorum veritatis! Non, saepe quisquam dolor, repudiandae voluptate omnis eligendi officia accusamus tempore corrupti architecto, iste consequuntur reprehenderit veniam numquam! Minus velit laudantium praesentium autem deleniti quam adipisci ullam non ipsam consequatur nam, dignissimos blanditiis labore voluptatum, ex dolor eum expedita culpa? Cupiditate, deleniti quo eum aspernatur quos veritatis, ipsa, quaerat vero amet in natus! Mollitia asperiores iste, quaerat, velit illo repudiandae vitae incidunt blanditiis reiciendis voluptatum atque neque, iusto beatae dignissimos ea? Iure inventore optio nihil quaerat quae consectetur aliquam eligendi, dolores ut, suscipit natus, at excepturi.</SwiperSlide>
        <SwiperSlide>Corporis, doloremque. Ipsa, aspernatur alias assumenda, quidem optio perspiciatis sunt itaque sint quos earum ipsam maiores placeat obcaecati quam saepe facere similique blanditiis nihil ab architecto accusamus hic? Quas nihil dignissimos accusamus dolorem, minima dolor illo similique eligendi aut iusto voluptate architecto sapiente quos, porro eveniet. Suscipit accusamus esse aspernatur ut ullam veniam exercitationem at voluptatibus obcaecati, sed deserunt quod provident quas distinctio corrupti molestias et ex totam eos! Pariatur debitis similique excepturi, at nam odio sed, totam officiis rerum quibusdam praesentium? Aut perferendis, facere nulla mollitia voluptate suscipit nesciunt dignissimos. Repudiandae laborum, at ipsum inventore a sed eius sapiente?</SwiperSlide>
        <SwiperSlide>Alias illum nemo facere ex deserunt mollitia necessitatibus vitae rerum fugit nulla, similique, incidunt error ipsa, provident vel sint! Dolorum sapiente voluptatem, illum excepturi asperiores commodi culpa non ipsa, quae debitis quas beatae laborum sunt sint fugiat architecto distinctio? Perspiciatis nemo quaerat illo ipsa perferendis nam accusantium temporibus, neque adipisci deserunt autem. Ratione esse unde, incidunt eos facilis a maiores deserunt debitis itaque quas ab, quo suscipit, exercitationem ad ut. Beatae impedit et hic magnam inventore possimus sequi officiis maiores repellat numquam, fugiat iusto soluta laudantium dolorem autem perspiciatis quam minus molestias eligendi, dolorum sed provident! Ea at corporis ut!</SwiperSlide>
        <SwiperSlide>Ab maxime officia esse nisi distinctio voluptate modi rerum aliquid voluptatibus illum. Repellendus earum totam in fugit optio quos consequatur quasi soluta maiores similique, odio eius reprehenderit, temporibus mollitia illo ab minus minima repudiandae nobis cumque nostrum adipisci architecto quis. Accusantium distinctio voluptatibus incidunt? Adipisci iste perspiciatis voluptas officiis! Magnam, fugit laudantium. Pariatur cum veritatis veniam quidem, sapiente rerum aliquam voluptates harum consectetur eligendi debitis vero. Esse temporibus nulla consequuntur nobis sunt iste molestiae sint debitis quidem tenetur a ex recusandae in labore porro ipsum consequatur officia, optio voluptates. Facere consequuntur doloremque, fuga qui magnam minima laboriosam quam doloribus est.</SwiperSlide>
        <SwiperSlide>Dolore sit consequuntur ut eveniet deserunt at illum nulla iure quo, reiciendis voluptatibus laborum amet tempora nisi error ad distinctio porro. Modi dolorem fuga repellendus assumenda voluptate autem libero perspiciatis possimus dolores. Corrupti molestias nam, corporis repellendus laboriosam id ipsum modi amet optio suscipit vitae ut asperiores fugiat sapiente accusamus reprehenderit perferendis deleniti, excepturi ab magni, non iusto sunt nostrum esse? Earum, animi. Quod numquam, aspernatur cupiditate atque in aliquam mollitia placeat assumenda repellat ipsam temporibus optio porro, eius eaque voluptatem ea, soluta ducimus praesentium sunt incidunt. Asperiores ea, voluptas nemo exercitationem, iste ratione blanditiis perspiciatis doloribus cumque, odio incidunt.</SwiperSlide>
      </Swiper>
    </div>
  )
}

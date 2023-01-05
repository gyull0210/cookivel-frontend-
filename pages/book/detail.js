import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper"
import { HiBars3, HiMagnifyingGlass, HiOutlineBell, HiChevronRight, HiChevronLeft, HiXMark } from 'react-icons/hi2'
import Button from '../../components/core/button/Button'
import Avatar from '../../components/core/avatar/Avatar'
import MainCarousel from '../../components/overlay/mainCarosel/MainCarosel'
import { useEffect, useRef, useState } from 'react'
import useDetectClose from '../../components/hooks/useDetectClose'

export default function Detail() {

  const handleAvatar = async () => {
    const res = await fetch("https://i.pravatar.cc/48");

    return res.json();
  }

  const src= "https://i.pravatar.cc/48/"

  const [cardList, setCardList] = useState("");

  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false); 
 
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://picsum.photos/v2/list`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Response Error");
      setCardList((response).json());
      console.log(cardList)
    };
    fetchData().catch((error) => console.log(error));
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pageRef= useRef(null);

  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [sidebarIsOpen, sidebarRef, sidebarHandler] = useDetectClose(false);
  return (
    <>
      <Head>
        <title>쿠키블</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header tw="p-2 border-b border-gray-200">
        <nav tw="relative flex justify-between items-center max-w-screen-lg mx-auto">
          <div tw="lg:hidden">
            <button
              ref={sidebarRef}
              type="button"
              tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              onClick={sidebarHandler}
            >
              <HiBars3 tw="w-6 h-6 text-gray-400"/>
            </button>
          </div>
          <div tw="flex justify-between items-center space-x-4">
            <div tw="inline-flex mb-1">
              <span tw="text-2xl font-bold">C</span>
              <span tw="text-2xl font-bold text-[#E7CE96]">OO</span>
              <span tw="text-2xl font-bold">KVEL</span>
            </div>

            <div tw="hidden lg:flex space-x-4 text-lg">
              <a tw="px-4 py-2 font-bold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="/book/detail">자유연재</a>
              <a tw="px-4 py-2 font-bold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">자유연재</a>
              <a tw="px-4 py-2 font-bold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">자유연재</a>
              <a tw="px-4 py-2 font-bold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">자유연재</a>
            </div>
          </div>

          <div tw="flex justify-between items-center">
            <div tw="">
              <button
                type="button"
                tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              >
                <HiMagnifyingGlass tw="w-6 h-6 text-gray-400"/>
              </button>
            </div>
            <div tw="hidden">

            </div>
            <div tw="flex justify-between items-center space-x-2">
              <button
               type="button"
               tw="hidden lg:block p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              >
                <HiOutlineBell tw="w-6 h-6 text-gray-400"/>
              </button>
              {
                 
              <>
              <button tw="hidden" type="button" ref={myPageRef} onClick={myPageHandler}>
                  <Avatar size="md" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={48} height={48}/>
              </button>
              <div css={[tw`hidden absolute bg-white w-[100px] h-full rounded-lg top-10 right-0 z-10 mt-4 origin-top-right shadow duration-150 ease-in-out`, myPageIsOpen ? tw`opacity-100`: tw`opacity-0`]}>
                <ul tw="text-center">
                  <li>메뉴</li>
                  <li>메뉴</li>
                </ul>
              </div>
              </>
              }
            </div>
          </div>
        </nav>
      </header>
      <div tw="md:hidden border-b border-gray-200">
        <nav tw="relative flex justify-between items-center text-center max-w-screen-lg mx-auto">
          <a tw="py-4 w-full font-semibold active:bg-gray-100" href="">자유연재</a>
          <a tw="py-4 w-full font-semibold">자유연재</a>
          <a tw="py-4 w-full font-semibold">자유연재</a>
          <a tw="py-4 w-full font-semibold">자유연재</a>
        </nav>
      </div>   
      <aside tw="absolute w-[300px] md:hidden h-screen bg-gray-50 top-0 z-50 duration-300 transition-all ease-in-out shadow" css={[sidebarIsOpen ? tw``: tw`-translate-x-[300px]`]}>
        <nav tw="">
          <div tw="flex justify-end border-b border-gray-400 p-3">
            <button type="button" onClick={sidebarHandler}><HiXMark tw="w-8 h-8"/></button>
          </div>
          <div tw="flex items-center p-3">
            <Avatar size="md" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={48} height={48}/>
            <div tw="ml-4">
              <p tw="text-xl font-bold">빵냥 님</p>
              <span tw="text-gray-400">mkht0210@gmail.com</span>
            </div>
          </div>
          <div tw="flex flex-col p-3">
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">알림</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">내 서재</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">작품 쓰기</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">스토리룸</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">이벤트</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">고객센터</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">공지사항</a>
          </div>
        </nav>
      </aside>
      <main tw="flex flex-col mt-[115px]">
        <section tw="relative w-full h-80">
          <div tw="lg:max-w-[1970px] w-full relative mx-auto p-0 flex justify-center">
          <Swiper
            tw="min-w-[calc((3*480px) + (3* 20px))] lg:min-w-[calc((3 * 560px) + (3 * 20px))] lg:max-w-[calc((3 * 560px) + (3 * 20px))] h-80 flex flex-col justify-center items-center"
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            loopAdditionalSlides={1}
            slidesPerView={3}
            slidesPerGroup={3}
            watchOverflow={true}
            navigation={{prevEl: prevRef.current, nextEl: nextRef.current}}
            pagination={{ clickable: true, type: 'bullets' , el: 'swiper-pagination-container'}}
            scrollbar={{ draggable: true, el: null }}
            autoplay={false}
            
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              }
            }}
            spacebetween={0}
          >
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=BDC01094" alt="1"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=7F5AE56A" alt="2"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=B0E33EF4" alt="3"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=2D297A22" alt="4"/>
                  <div tw=""></div>
                </div>
              </div>       
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=9D9539E7" alt="5"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=225E6693" alt="6"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=8B7BCDC2" alt="7"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=500B67FB" alt="8"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-[480px] lg:w-[580px] md:min-w-[500px] rounded-lg overflow-hidden px-[10px]">
                <div tw="w-full relative aspect-w-4 aspect-h-3 pb-[75%] text-white">
                  <img tw="absolute object-center object-cover w-full top-0 left-0" src="https://api.lorem.space/image/pizza?w=800&h=600&hash=A89D0DE6" alt="9"/>
                  <div tw=""></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div tw="absolute w-full flex justify-between items-center top-1/3 z-20">
            <button
              ref={prevRef}
              type="button"
              tw="min-w-fit h-full p-3 hover:bg-gray-50 text-gray-400 lg:hover:bg-transparent lg:hover:text-sky-500 rounded-full lg:rounded-none"
            >
              <HiChevronLeft tw="w-12 h-12 text-gray-400 hover:lg:text-sky-500"/>
            </button>
            <button
              ref={nextRef}
              type="button"
              tw="min-w-fit h-full p-3 hover:bg-gray-50 text-gray-400 lg:hover:bg-transparent lg:hover:text-sky-500 rounded-full lg:rounded-none"
            >
              <HiChevronRight tw="w-12 h-12"/>
            </button>
          </div>         
          </div>
          <div className="swiper-pagination-container"></div>         
        </section>      
        <section tw="max-w-screen-lg mx-auto mt-52">
          <div tw="w-full flex">
            <div tw="w-[500px] flex justify-between items-center border-b border-gray-200 px-4 py-2">
              <h2 tw="text-xl font-bold">인기 콘텐츠</h2>
              <HiChevronRight tw="w-6 h-6" />
            </div>
          </div>
        </section>
        <section tw="max-w-screen-lg mx-auto">
          <div tw="w-full flex">
            <div tw="w-[500px] flex justify-between items-center border-b border-gray-200 px-4 py-2">
              <h2 tw="text-xl font-bold">최신 콘텐츠</h2>
              <HiChevronRight tw="w-6 h-6" />
            </div>
          </div>
        </section>
        <section tw="flex mx-auto">
          
        </section>
      </main>
      <footer>
        
      </footer>
    </>
  )
}


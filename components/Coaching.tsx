import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Pic from '../assets/bag.jpg'
import Ln from '../assets/linkedin.png'
import Sl from '../assets/sl.png'
import Nf from '../assets/nf.png'

interface CoachingProps {

}

const Coaching: React.FC<CoachingProps> = ({}) => {
        return (
           <div className='mt-[160px]'>
                <div className='flex flex-row relative justify-center'>
                    <div className=' text-black '>
                        <h1 className=' font-extrabold text-[60px] leading-[76px] flex justify-end'>Where  <span className='text-[#FF8462] ml-2'>Coaching</span></h1>
                        <div className='py-[97px] px-[100px] bg-[#FF8462] mt-[40px] text-white flex flex-col gap-[13px] rounded-coaching'>
                            <h4 className='text-[24px] leading-[30px] font-extrabold'>
                            Thought partner
                            </h4>
                            <p className='w-[281px] text-[18px] leading-[140%] font-normal'>
                            Mento is a platform where coaching and mentoring meet. 
                            </p>
                        </div>
                    </div>  
                    <span className='font-extrabold text-[60px] leading-[76px] left-[51%] absolute top-[9%]'>&</span>
                    <div className=' text-black mt-[6.5rem]'>
                        <h1 className=' font-extrabold text-[60px] leading-[76px] relative left-[4rem]'>Mentoring <span className='text-[#C677C0]'>meet</span></h1>
                        <div className='py-[97px] px-[100px] bg-[#C677C0] text-white mt-[40px] flex flex-col gap-[13px] rounded-mentoring'>
                            <h4 className='text-[24px] leading-[30px] font-extrabold'>
                            Thought partner
                            </h4>
                            <p className='w-[281px] text-[18px] leading-[140%] font-normal'>
                            Mento is a platform where coaching and mentoring meet. 
                            </p>
                        </div>
                    </div>  
                </div>
                <section className='bg-[#262626] mt-[-14rem]'>
                <div className='flex flex-row gap-[75px] py-[281px] ml-[121px] items-center pb-[83px]'>
                <Image src={Ln} alt="Linkedin" />
                <Image src={Sl}  alt="Slack" />
                <Image src={Nf}  alt="Netflix"/>
                <Image src={Ln}  alt="Linkedin" />
                <Image src={Sl}  alt="Slack"/>
                <Image src={Nf}  alt="Netflix"/>
                <Image src={Sl}  alt="Slack" />
                </div>
             <div className='flex justify-center'>
             <Link href='/'>
                    <a className='text-[#FF8462] border-[#FF8462]  border-2 flex  text-[18px] mt-[55.53px] leading-[23px] font-semibold px-[30px] py-[18px] rounded-[8px]'>
                    Meet our coaches
                    </a>
                </Link>
             </div>
               
               
              
                </section>
           </div>
        );
}
export default Coaching
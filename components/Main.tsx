import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Pic from '../assets/bag.jpg'
import Ln from '../assets/linkedin.png'
import Sl from '../assets/sl.png'
import Nf from '../assets/nf.png'

interface MainProps {

}

const Main: React.FC<MainProps> = ({}) => {
        return (
            <section className='bg-[#262626] '>
                <div className='flex flex-row ml-[121px] gap-[79px]'>
                    <div className='flex flex-col mt-[158px]'>
                        <div className='flex flex-col'>
                        <h1 className='text-white font-extrabold text-[60px] leading-[76px]'><span className='text-[#EEA3EA]'>Feel |<br/></span>better at work</h1>
                        <p className='font-normal leading-[140%] text-[18px] text-white mt-[27px] w-[367px]'>
                        A coaching platform to build the career of your dreams
                        </p>
                        <Link href='/'><a className='text-white text-[18px] w-fit mt-[50px] leading-[23px] font-semibold px-[30px] py-[18px] bg-[#F1704C] rounded-[8px]'>Start coaching journey</a></Link>
                        <span className='flex flex-row gap-[12px] mt-[45px] items-center'><h4 className='text-[#F2C0F0] text-[24px] leading-[30px] font-semibold'>4.5/5</h4><p className='text-white font-normal text-[18px] leading-[23px]'>member satisfaction</p></span>
                        </div>
                    </div>
                    <div className='flex-1 justify-end flex '>
                        <div className='relative'>
                        <Image src={Pic} alt="Image" width={796} height={593} className="pic" />
                            <div className='absolute css-abs top-[50%] left-[50%]'>
                            <svg className='cursor-pointer' width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_810)">
<circle cx="52.5" cy="48.5" r="42.5" fill="#EEA3EA"/>
</g>
<g filter="url(#filter1_d_1_810)">
<path d="M65.5517 44.6698C68.2184 46.2094 68.2184 50.0584 65.5517 51.598L48.4245 61.4864C45.7579 63.026 42.4245 61.1015 42.4245 58.0223L42.4245 38.2456C42.4245 35.1664 45.7579 33.2419 48.4245 34.7815L65.5517 44.6698Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_810" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_810"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_810" result="shape"/>
</filter>
<filter id="filter1_d_1_810" x="32.4246" y="28.2393" width="45.1271" height="47.7891" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_810"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_810" result="shape"/>
</filter>
</defs>
</svg>

                            </div>
                        </div>
                   
                        </div>
                </div>
                <div className='flex flex-row gap-[75px] mt-[119px] ml-[121px] items-center pb-[83px]'>
                <Image src={Ln} alt="Linkedin" />
                <Image src={Sl}  alt="Slack" />
                <Image src={Nf}  alt="Netflix"/>
                <Image src={Ln}  alt="Linkedin" />
                <Image src={Sl}  alt="Slack"/>
                <Image src={Nf}  alt="Netflix"/>
                <Image src={Sl}  alt="Slack" />
                </div>
            </section>
        );
}
export default Main
import Image from 'next/image';
import Img from 'next/image';
import React from 'react'
import Pm from '../assets/em.png'
import El from '../assets/El.png'
import Ms from '../assets/Ms.png'
import Center from '../assets/center.png'
import Ce from '../assets/ce.png'
import client from '../client';
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

interface SupportedProps {
    supported : any
}

const Supported: React.FC<SupportedProps> = ({supported}) => {
    const builder = imageUrlBuilder(client)
    const urlFor = (source: SanityImageSource) => {
    return builder.image(source)
} 
console.log(supported)
        return (
            <div className='grid grid-cols-2 relative'>
                <div className='bg-[#505A54]'>
                    <div className='text-white my-[151px] mx-[159px]'>
                        <h1 className='font-bold w-[349px] text-[42px] leading-[53px] '>{supported.supportedtitle}</h1>
                        <ul className='mt-[36px] w-[358px] flex flex-col font-normal text-[18px] gap-8 leading-[140%]'>
                            {supported.supportedlist.map((sup : any) => 
                            (
                                <li className='flex flex-row gap-[24px] items-center'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                    </svg>
    
                                    <span className='flex-1'>{sup}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-[41px] bg-[#EDF2F0] h-[574px]'>
                    {supported.discussions[0] &&
                    (
                        <div className='flex flex-row ml-[124px]  mr-[177px]  mt-[120px] items-center gap-[19px]'>
                        <div className='mt-[-1rem]'>
                            <Img src={urlFor(supported.discussions[0].image).url()} width={40} height={40} className='rounded-[50%]'  />
                        </div>
                        <div className='flex flex-col gap-[9px] items-start flex-1 '>
                        <span className='text-black font-normal text-[14px] leading-[140%] bg-white px-[15px] py-[10px] shadowed rounded-[8px]'>
                        {supported.discussions[0].text}
                        </span>
                        <h4 className='text-[#505A54] font-normal text-[14px] leading-[140%]'>{supported.discussions[0].responsible}</h4>
                        </div>
                    </div>
                    )
                    }
                  
                    <div className='flex flex-row ml-[124px] mr-[177px] items-center gap-[19px]'>
                        {supported.discussions[1] && 
                        (
                            <>
                       <div className='flex flex-col gap-[9px] items-end flex-1 '>
                        <span className='text-black font-normal text-[14px] leading-[140%] bg-white px-[15px] py-[10px] shadowed rounded-[8px]'>
                       { supported.discussions[1].text}
                        </span>
                        <h4 className='text-[#505A54] font-normal text-[14px] leading-[140%]'>{supported.discussions[1].responsible }</h4>
                        </div>
                        <div className='mt-[-1rem]'>
                        <Img src={urlFor(supported.discussions[1].image).url()} width={40} height={40} className='rounded-[50%]'  />
                        </div>
                            </>
                        )
                        }

                       
                    </div>
                    {supported.discussions[2] && 
                        (
                    <div className='flex flex-row ml-[180px] mr-[124px] items-center gap-[19px]'>
                        <div className='mt-[-1rem]'>
                            <Img src={urlFor(supported.discussions[2].image).url()} width={40} height={40} className='rounded-[50%]'  />
                        </div>
                       <div className='flex flex-col gap-[9px] items-start flex-1 '>
                        <span className='text-black font-normal text-[14px] leading-[140%] bg-white px-[15px] py-[10px] shadowed rounded-[8px]'>
                       {supported.discussions[2].text}
                        </span>
                        <h4 className='text-[#505A54] font-normal text-[14px] leading-[140%]'>{supported.discussions[2].responsible }</h4>
                        </div>
                           
                    </div>
                           )
                        }

                </div>
                <div className=''>
                    <div className='absolute top-[50%] left-[25%] z-[2]'>
                    <Img src={urlFor(supported.centeredvector).url()} width={447.9} height={328} className='z-[1]' />

                    </div>
                    <div className='absolute area left-[10rem] bottom-[18%]'>
                    <Img src={urlFor(supported.image).url()} width={430} height={245} className='z-[1]' />
                    </div>
                </div>
                <div className='bg-[#637A6F] mt-[-13rem] bordered'>
                    <div className='text-white my-[93px] ml-[198px] mr-[177px]'>
                        <h1 className='font-bold w-[349px] text-[42px] leading-[53px] '>More progress, less stuck</h1>
                        <ul className='mt-[36px] w-[358px] flex flex-col font-normal text-[18px] gap-8 leading-[140%]'>
                            <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Promotions, raises</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Lock in a promotion </span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Get the raise you deserve</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Grow as a manager & leader</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Develop new skills</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Get unstuck and find clarity</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Reach your career goals</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#FCE4FB"/>
                                </svg>

                                <span className='flex-1'>Learn 10x faster</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        );
}
export default Supported
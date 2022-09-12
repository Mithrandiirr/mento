import Image from 'next/image';
import Img from 'next/image';
import React from 'react'
import Pm from '../assets/em.png'
import El from '../assets/El.png'
import Ms from '../assets/Ms.png'
import Center from '../assets/center.png'
import Ce from '../assets/ce.png'

interface SupportedProps {

}

const Supported: React.FC<SupportedProps> = ({}) => {
        return (
            <div className='grid grid-cols-2 relative'>
                <div className='bg-[#505A54]'>
                    <div className='text-white my-[151px] mx-[159px]'>
                        <h1 className='font-bold w-[349px] text-[42px] leading-[53px] '>Feel supported, not burnt out</h1>
                        <ul className='mt-[36px] w-[358px] flex flex-col font-normal text-[18px] gap-8 leading-[140%]'>
                            <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                </svg>

                                <span className='flex-1'>Tackle burnout and find your fuel</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                </svg>

                                <span className='flex-1'>Deepen your focus</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                </svg>

                                <span className='flex-1'>Find work-life balance</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                </svg>

                                <span className='flex-1'>Increase your efficiency without sacrificing your health</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                </svg>

                                <span className='flex-1'>Get help tackling daily challenges</span></li>
                                <li className='flex flex-row gap-[24px] items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#F2C0F0"/>
                                </svg>

                                <span className='flex-1'> Stress less, feel happier  </span></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-[41px] bg-[#EDF2F0] h-[574px]'>
                    <div className='flex flex-row mx-[136px] mt-[120px] items-center gap-[19px]'>
                        <div className='mt-[-1rem]'>
                            <Image src={Pm}  />
                        </div>
                        <div className='flex flex-col gap-[9px] items-start flex-1 '>
                        <span className='text-black font-normal text-[14px] leading-[140%] bg-white px-[15px] py-[10px] shadowed rounded-[8px]'>
                        Tackle burnout and find your fuel. Tackle burnout and find your fuel
                        </span>
                        <h4 className='text-[#505A54] font-normal text-[14px] leading-[140%]'>Project Manager</h4>
                        </div>
                    </div>
                    <div className='flex flex-row mx-[136px] items-center gap-[19px]'>
                    <div className='flex flex-col gap-[9px] items-end flex-1 '>
                        <span className='text-black font-normal text-[14px] leading-[140%] bg-white px-[15px] py-[10px] shadowed rounded-[8px]'>
                        Tackle burnout and find your fuel. Tackle burnout and find your fuel
                        </span>
                        <h4 className='text-[#505A54] font-normal text-[14px] leading-[140%]'>Engineering Lead</h4>
                        </div>
                        <div className='mt-[-1rem]'>
                            <Image src={El}  />
                        </div>
                       
                    </div>
                    <div className='flex flex-row mx-[136px]  items-center gap-[19px]'>
                        <div className='mt-[-1rem]'>
                            <Image src={Ms}  />
                        </div>
                        <div className='flex flex-col gap-[9px] items-start flex-1 '>
                        <span className='text-black font-normal text-[14px] leading-[140%] bg-white px-[15px] py-[10px] shadowed rounded-[8px]'>
                        Tackle burnout and find your fuel. Tackle burnout and find your fuel
                        </span>
                        <h4 className='text-[#505A54] font-normal text-[14px] leading-[140%]'>Marketing Specialist</h4>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='absolute top-[50%] left-[25%] z-[2]'>
                    <Image src={Center} className='z-1' />

                    </div>
                    <div className='absolute area left-[10rem] bottom-[18%]'>
                    <Image src={Ce} className='z-[1]' />
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
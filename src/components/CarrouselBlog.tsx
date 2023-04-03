import { motion } from 'framer-motion';
import ImgMediaCard from './ImgMediaCard';
import { makeStyles } from 'tss-react/mui';
import './CarrouselBlog.css';
import { useEffect, useRef, useState } from 'react';
import { Project } from '../types';
//@ts-ignore
import screenShot1 from '../img/1Scrennshot.png';
//@ts-ignore
import screenShot2 from '../img/starkScreenShot.png'





type Props = {
    
};

const ProjectArray: Project[] =[
    {
        name: 'Coupon System',
        img: screenShot1,
        url: 'https://danielasher91.github.io/danielCouponSystem/',
        summery: 'The project is a full-stack coupon system with admin, company, and customer users. Companies can create coupons, and customers can buy them at a discount. The admin manages the system, users, and generates reports.',
        programs: ['Springboot', 'React', 'Java', 'TypeScript', 'mySql']
    },
    {
        name: 'Stark Active-Wear',
        img: screenShot2,
        url: 'https://danielasher91.github.io/stark-activewear/#/',
        summery: 'Stark Activewear is an online store that sells active wear clothing. The store is built using React and TypeScript, which provide a modern and efficient user interface. The app has a quantity management feature that helps to ensure that the stores inventory is accurate and up-to-date. The database is created using Java Spring Boot, which provides a robust and reliable framework for managing data. Overall, Stark Activewear is a well-designed online store that is easy to use and helps customers find the active wear they need.',
        programs: ['Springboot', 'React', 'Java', 'TypeScript', 'mySql', 'Mui']
    
}
]



const CarrouselBlog:React.FC<Props> = (props) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
   

    return(
        <>
            <div id='carrousal'>
                <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    <motion.div className='item'>
                    <ImgMediaCard project={ProjectArray[0]}/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard project={ProjectArray[1]}/>
                    </motion.div>
                    {/* <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div> */}
                    </motion.div>
                </motion.div>
            </div>

        </>
    )

}

export default CarrouselBlog;
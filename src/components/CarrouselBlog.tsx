import { motion } from 'framer-motion';
import ImgMediaCard from './ImgMediaCard';
import { makeStyles } from 'tss-react/mui';
import './CarrouselBlog.css';
import { useEffect, useRef, useState } from 'react';
type Props = {};




const CarrouselBlog:React.FC<Props> = (props) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
   

    return(
        <>
            <div>
                <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    <motion.div className='item'>
                    <ImgMediaCard/>
                    </motion.div>
                    </motion.div>
                </motion.div>
            </div>

        </>
    )

}

export default CarrouselBlog;
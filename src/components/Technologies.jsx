import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri"
import { SiMysql } from "react-icons/si";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import { TbBrandPython } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 whileInView={{ opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{ duration: 1.5}}  className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                <TbBrandCpp className="text-7xl"></TbBrandCpp>
            </motion.div >
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400"></IoLogoJavascript>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                <SiMysql className="text-7xl"></SiMysql> 
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
                <PiMicrosoftExcelLogoDuotone className="text-7xl"></PiMicrosoftExcelLogoDuotone> 
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                <TbBrandPython className="text-7xl"></TbBrandPython> 
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
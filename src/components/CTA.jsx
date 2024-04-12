import Button from "./Button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      transition={{ duration: 1, type: "tween" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0"
    >
      <section className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-4xl text-center font-black">Let&apos;s Take the Next Step Together!</h1>
        <p className="lg:text-base xl:text-xl max-w-4xl text-center text-gray-700">
          Get in touch with us today to start your digital journey. Whether you&apos;re looking to revamp your website, develop a mobile app, or streamline your operations with custom software, we&apos;re here to make it happen. Drop us a
          line and let&apos;s make magic together!
        </p>
      </section>
      <Button variant={"primary"} type={"clickable"} title={"Get in touch"}></Button>
    </motion.div>
  );
};

export default CTA;

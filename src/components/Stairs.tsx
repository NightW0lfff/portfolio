import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggred delay
const reverseIndex = (index: number): number => {
  const totalSteps = 5; // number of steps
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    <>
      {/* render 6 motions div, each representing a step of the stairs
    Each div will have the same animation defined by the stairsAnimation object.
    The delay for each div is calculated dynamically base on it's reversed index.
    Creating a staggered effect with decreasing delay for each subsequent step.
    */}

      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.175,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.08,
            }}
            className="h-full w-full bg-[#eaeaea] relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;

// react or any library related to react
import { ReactNode } from "react";

// styles
import { CardContent, CardWrapper, Title } from "./styles";

import { motion } from "framer-motion";

// types props
interface CardsProps{
  title: string;
  children: ReactNode;
}

export function Cards({ title, children }: CardsProps) {
  return (
    <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
        <CardWrapper>
          <CardContent>
            <Title>{title}</Title>

            {children}
          </CardContent>
        </CardWrapper>
      </motion.div>
    </>
  );
}
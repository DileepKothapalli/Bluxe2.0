import styled from "styled-components";
import { motion } from "framer-motion";

export const Div = styled(motion.div)`
  // background: rgba(0, 0, 0, 1);
  //   background: rgba(0, 0, ${(props) => props.scrollR}, 1);

  background: rgba(
    ${(props) => props.scrollR},
    ${(props) => props.scrollG},
    ${(props) => props.scrollB},
    1
  );
  //   background: rgba(12, 12, 12, 1);
`;

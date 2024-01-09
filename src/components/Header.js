import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, chakra } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [prevPos, setPrevPos] = useState(0);
  const [transY, setTransY] = useState(0);
  const headerBox = useRef(undefined);

  const handleScroll = (e) => {
    const window = e.currentTarget;
    setScrollPos(window.scrollY);
  };

  // wait until the position changes before looking at it
  useEffect(() => {
    //console.log(`scrollPos changed to ${scrollPos}`);
    
    if (prevPos > scrollPos) {
       console.log("scrolling up");
      // console.log(`prev:${prevPos}, now:${scrollPos}`);
      setTransY(0);
    } else if (prevPos < scrollPos) {
       console.log("scrolling down");
      // console.log(`prev:${prevPos}, now:${scrollPos}`);
      setTransY(-200);
    }
    setPrevPos(scrollPos);
  },[scrollPos])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // clean up when leaving
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      //element.style.scrollMarginTop = element.offsetHeight;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={transY}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="top"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerBox}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {/* Add social media links based on the `socials` data */
              socials.map((child, index) => {
                return (<a href={child.url} key={'a-' + index.toString()}><FontAwesomeIcon icon={child.icon} size="2x" key={'icon-'+index.toString()} /></a>);
              })
            }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={() => handleClick(`projects`)} key="projects">Projects</a>
              <a href="#contact-me" onClick={() => handleClick(`contactme`)} key="contactme">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

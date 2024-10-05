import "./App.css";
import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "./assets/logo.svg";
import pizzaImage from "./assets/Pizza.png";
import vectorImg from "./assets/Vector 1.png";
import aboutUs from "./assets/aboutUS.png";
import Card from "./component/Card";
import grilledTomatoes from "./assets/grilled-tomatoes.png";
import snackforTravel from "./assets/snack-for-travel.png";
import postWorkoutRecipies from "./assets/Post-workout.png";
import howToGrillCorn from "./assets/howToGrillCorn.png";
import crunchwrapSupreme from "./assets/crunchwrapSupreme.png";
import broccoliCheeseSoup from "./assets/broccoliCheeseSoup.png";
import Footer from "./component/footer";

// Card data
const cardData = [
  {
    imageSrc: grilledTomatoes,
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imageSrc: snackforTravel,
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imageSrc: postWorkoutRecipies,
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imageSrc: howToGrillCorn,
    title: "How To Grill Corn",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imageSrc: crunchwrapSupreme,
    title: "Crunchwrap Supreme",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imageSrc: broccoliCheeseSoup,
    title: "Broccoli Cheese Soup",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function App() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Logic to slice the card data based on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < Math.ceil(cardData.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const boxClass = useBreakpointValue({ base: "mobile", md: "desktop" });

  const readMoreButtonProps = useBreakpointValue({
    base: {
      padding: "3px 26px",
      width: "112px",
      height: "32px",
      borderRadius: "27px",
      position: "absolute",
      left: "80px",
      top: "260px",
    },
    md: {
      padding: "6px 26px",
      width: "132px",
      height: "42px",
      borderRadius: "28px",
    },
  });

  return (
    <React.Fragment>
      <Box position="relative">
        {/* Logo */}
        <Box
          position="absolute"
          top="33px"
          left="100px"
          display={["none", "block"]}
          zIndex="10"
          height={83}
          width={107}
        >
          <Image src={logo} alt="Logo" className="logo" />
        </Box>

        {/* Hero Section */}
        <SimpleGrid
          columns={[1, null, 2]}
          spacing={10}
          mb={10}
          position="relative"
          alignItems="center"
          className="hero-section"
        >
          <Box
            position="relative"
            display="flex"
            justifyContent={["center", "flex-end"]}
            order={[1, 2]}
          >
            <Image
              src={pizzaImage}
              alt="Pizza"
              borderRadius="lg"
              boxSize={["100%", "auto"]}
              maxWidth={["100%", "735px"]}
              height={["auto", "804px"]}
            />
            <Box
              position="absolute"
              right={["0", "-100px"]}
              top={["0", "0"]}
              zIndex="1"
              marginTop={["-1%", "-1%"]}
            >
              <Image
                src={vectorImg}
                alt="Vector Image"
                width={["100%", "752px"]}
                height={["auto", "840px"]}
              />
            </Box>
            {/* Get in Touch Button */}
            <Button
              className="get-in-touch-button"
              colorScheme="red"
              border="1px solid white"
              borderRadius="21px"
              padding="3px 26px"
              position="absolute"
              top="20px" // Adjusted position for better alignment
              right={["10px", "20px"]}
              zIndex="2"
            >
              Get in Touch
            </Button>
          </Box>
          <Box textAlign={["center", "left"]} order={[2, 1]}>
            <Text className="discover-text">
              Discover the <span className="highlight">Best</span> Food and
              Drinks
            </Text>
            <Text className="natural-health-text">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button className="explore-button" colorScheme="red">
              Explore Now
            </Button>
          </Box>
        </SimpleGrid>

        {/* About Us Section */}
        <SimpleGrid
          className="about-us-section"
          columns={[1, null, 2]}
          spacing={10}
          mb={10}
        >
          <Box className="about-us-image">
            <Image src={aboutUs} alt="About Us" borderRadius="lg" />
          </Box>
          <Box className="about-us-box">
            <Text
              className={`about-us-text ${boxClass}`}
              fontSize="2xl"
              fontWeight="bold"
            >
              About Us
            </Text>
            <Text
              className="about-us-textt"
              width={["275px", null, "447px"]}
              height={["138px", null, "138px"]}
              fontFamily="'Open Sans', sans-serif"
              fontSize={["11px", null, "15px"]}
              color="#444957"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>

            <Button mt={4} bg="#E23744" color="white" {...readMoreButtonProps}>
              Read More
            </Button>
          </Box>
        </SimpleGrid>

        {/* Latest Articles Section */}
        <Text
          position="absolute"
          left={["80px", null, "108px"]}
          top={["1256px", null, "1614px"]}
          fontFamily={[
            "'Poppins', sans-serif",
            null,
            "'Source Sans Pro', sans-serif",
          ]}
          fontWeight="600"
          fontSize={["28px", null, "56px"]}
          lineHeight={["54px", null, "42px"]}
          letterSpacing="0.04em"
          color="#0E2368"
        >
          Latest Articles
        </Text>

        {/* Articles with Pagination */}
        <SimpleGrid
          columns={[1, null, 3]}
          spacing={10}
          mt={["-200px", null, "40px"]} // Reduced margin-top for mobile view
          className="article-grid"
        >
          {currentCards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </SimpleGrid>

        {/* Pagination Controls */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={["290px", null, "300px"]}
        >
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            {"<"}
          </Button>
          <Text
            mx={5}
            fontWeight="bold"
            color={currentPage === 1 ? "black" : "gray"}
          >
            {`${currentPage} / ${Math.ceil(cardData.length / cardsPerPage)}`}
          </Text>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(cardData.length / cardsPerPage)}
          >
            {">"}
          </Button>
        </Box>
      </Box>
      <hr/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

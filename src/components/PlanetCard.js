import React from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@chakra-ui/react";

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <Stack display='inline-block' spacing='24px' align='start'>
        <Box display="flex" width='100px' height='100px'>
          <div data-testid="planet-card">
            <span data-testid="planet-name">{planetName}</span>
            <img src={planetImage} alt={`Planeta ${planetName}`} />
          </div>
        </Box>
      </Stack>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

import React from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@chakra-ui/react";

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <Stack display="inline-block" spacing="24px" align="start">
        <Box display="inline-block" width='100px' height='100px'>
          <div data-testid="mission-card">
            <p data-testid="mission-name">{name}</p>
            <p data-testid="mission-year">{year}</p>
            <p data-testid="mission-country">{country}</p>
            <p data-testid="mission-destination">{destination}</p>
          </div>
        </Box>
      </Stack>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

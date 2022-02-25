import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from "@chakra-ui/react";

class Title extends Component {
  render() {
    const { headline } = this.props;
    return <Heading textAlign='center' fontSize='2xl'>{headline}</Heading>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;

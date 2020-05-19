import PropTypes from "prop-types";
import styled from "styled-components";


const Tile = styled.div`padding: 3%;`;


Tile.propTypes = {
  elevation: PropTypes.string
};

Tile.defaultProps = {
  elevation: "0.05"
};

export default Tile;



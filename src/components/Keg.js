import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.name}: ${props.price}</h3>

        <h4>{props.brand}, {props.alcoholper}%</h4>
        <hr/>
      </div>
  
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholper: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func 
};


export default Keg;
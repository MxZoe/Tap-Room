import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingDecrease, onChanging } = props; 

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <h4>{keg.brand}, ${keg.price}, {keg.alcoholper}%</h4>
      <h4>Pints Remaining:</h4>
      <input type='number' name='pints' value={keg.pints} onChange={()=>onChanging}></input>
       
      <button onClick={ ()=> onClickingDecrease(keg)}>Sell pint</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete keg</button> 
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func ,
  onClickingIncrease: PropTypes.func
};



export default KegDetail;
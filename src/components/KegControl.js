import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,

    };
    this.handleClick = this.handleClick.bind(this);
  }

//   handleChange = (e) => {
//     let value = (e.target.value ? parseInt(e.target.value) : 0);
//     value = this.validateValue(value);
//     this.setState({[e.target.pints]: value});
// }

  decreasePints = (keg) => {
    let newValue = this.validatePints(keg.pints - 1);
    console.log(newValue)
    this.setState({[keg.pints]: newValue})
    console.log(keg.pints)
  }


  handleDecreasePints = (kegToDecrease) => {
    const editedMainKegList = this.state.mainKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToDecrease); 
    this.decreasePints(kegToDecrease) 
    console.log(kegToDecrease.pints) 
    this.setState({
      mainKegList: editedMainKegList,
      selectedKeg: kegToDecrease,
    });   
  }

  
  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id); 
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false });
    }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  validatePints(value){
    if(value < this.props.min) {
      value = this.props.min;
    } 
    return value;
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
 
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingDecrease ={this.handleDecreasePints} onChanging={this.handleChange}/>
      console.log(this.state.selectedKeg.pints);
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />;
     
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}
KegControl.defaultProps = {
  min: 0,
};
export default KegControl;

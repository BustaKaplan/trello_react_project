import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(){
    super();
    this.state={
      completeStatus: false, archiveStatus: false
    };
  }
  render(){
    let completeButton;
    if(!this.state.completeStatus){
      completeButton = <button className ="complete-card" onClick = {this._markComplete.bind(this)}>></button>;
    };
    let archiveButton;
    if(!this.state.archiveStatus){
      archiveButton = <button className ="delete-card" onClick = {this._markArchive.bind(this)}>></button>
      };

    return(
            <div className ="card">
              <div className ="title">{this.props.title}</div>
              <div className ="description">{this.props.description}</div>
              <div className ="actions">
                {archiveButton}
                {completeButton}
              </div>
            </div>
    );
  }
  _markComplete(){
    this.setState({completeStatus: true});
  };
  _markArchive(){
    this.setState({archiveStatus: true});
  };
}
class CardColumn extends React.Component {
  _getCards(){
    const cardList = [
        {id:1, title:"Take React Course", description:"code on code on code on code..."},
        {id: 2, title:"Learn React", description:"take the first level of React"},
        {id:3, title:"Plan Two Truths and a Lie", description:"Finish Wireframe"}
      ];
    return cardList.map((card) => {
      return (
        <Card title={card.title} description={card.description} key={card.id} />
     );
   });
  }
  render() {
    const cards = this._getCards();
    console.log(this._getCards());
    return (
      <div id="up-next" className="card-column">
        <div className="card-column-title">Up Next</div>
        <div className="card-list">
            {cards}
        </div>
    </div>
  );
  }
}
export default CardColumn;

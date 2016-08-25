window.UserEventsRow = React.createClass({


  getInitialState: function() {
    /*
      Parse date for initial state
    */
    var timestamp = this.props.event.createdOn;
    var date = moment.unix(timestamp).format("MM/DD/YYYY")
    var time = moment.unix(timestamp).format("HH:MM")


    return ({
      date: date,
      time: time
    });
  },


  /*
    Used for dinamic class,
    to change color to severity badge
  */
  dynamicClass: function(){
     return "col-xs-2 severity severity" + this.props.event.severity
  },
  render: function() {

    return (
      <div className="itemContainer">

        <div className="row itemData">

          <div className="col-xs-2 date">
            {this.state.date}
          </div>
          <div className="col-xs-2 time">
            {this.state.time}
          </div>
          <div className="col-xs-4 name">
            {this.props.event.name}
          </div>

          <div className={this.dynamicClass()}>
            <span>{this.props.event.severity}</span>
          </div>

          <div className="col-xs-2 tags">
            {this.props.event.tags.source}
          </div>

        </div>

        <div className="row itemDescription">
          <p>
            {this.props.event.description}
          </p>
        </div>

      </div>
    );
  }
});

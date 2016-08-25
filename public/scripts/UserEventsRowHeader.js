
window.UserEventsRowHeader = React.createClass({
  render: function() {
    return (
      <div className="row headerRow">
        <div className="col-xs-2">
          <i className="fa fa-calendar"></i> Date
        </div>
        <div className="col-xs-2">
          <i className="fa fa-clock-o"></i> Time
        </div>
        <div className="col-xs-4">
          <i className="fa fa-flag"></i> Name
        </div>
        <div className="col-xs-2 text-center">
          <i className="fa fa-warning"></i> Severity
        </div>

        <div className="col-xs-2">
          <i className="fa fa-flask"></i> Tags
        </div>


      </div>
    );
  }
});

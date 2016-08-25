window.RefreshBtn = React.createClass({
  render: function() {
    return (
      <a className="btn btn-default refreshBtn" onClick={this.props.fetchData}>
        <i className="fa fa-refresh"></i>
        refresh
      </a>
    );
  }
});

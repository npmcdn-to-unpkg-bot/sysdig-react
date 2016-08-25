window.UserEvents = React.createClass({
  getInitialState: function() { return { } },


  /*
    Get the json from the API end Point
  */
  fetchData: function(){

    console.log("fetchData");

    this.serverRequest = $.get(this.props.source, function (result) {
      /*
        Set the state passing the events array
      */
      this.setState({
        lastEvents : result.events
      });

      $(".timeline").animate({ width: "100%" }, 30000, function(){
          $( this ).css("width","0%");
      });

    }.bind(this));
  },

  componentDidMount: function() {
    /*
      Fetch data first
    */
    this.fetchData();

    /*
      Fetch data every 30 seconds
    */
    var _this = this
    setInterval(function(){

      _this.fetchData();
    }, 30000);


  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },



  render: function() {

    if(this.state.lastEvents){
      return (
        <div className="tableContainer">



          <RefreshBtn fetchData={this.fetchData} />

          <UserEventsRowHeader />

          {this.state.lastEvents.map(function(event){
            return <UserEventsRow key={event.id} event={event} />;
          })}
        </div>
      );
    }else{
      return (
        <div>

          <Loading />

        </div>
      );
    }

  }

});

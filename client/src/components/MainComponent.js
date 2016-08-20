var React=require("react");
var rows=[];
var WeatherComponent = React.createClass({
 /*INITIAL STATE*/
 getInitialState: function() {
   return {data: [],city:''};
 },
 allWeather: function()
 {
 $.ajax({
   url:'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=3df6daf869e3fea120f0aa7d599a2577',
   dataType: 'json',
   type: 'GET',
   success: function(data)
   {
     //this.setState({data:data});
     console.log(data);
     $.ajax({
           url: 'http://localhost:8080/data',
           dataType: 'json',
           type: 'POST',
           data:{temp:data.main.temp,pressure:data.main.pressure ,humidity:data.main.humidity,temp_min:data.main.temp_min,temp_max:data.main.temp_max },
           success: function(data)
           {
             rows.push(<tr><td>Temprature</td><td>{data.temp}</td></tr>,
               <tr><td>Pressure</td><td>{data.pressure}</td></tr>,
               <tr><td>Humidity</td><td>{data.humidity}</td></tr>,
               <tr><td>Minimum Temprature</td><td>{data.temp_min}</td></tr>,
               <tr><td>Maximum Temprature</td><td>{data.temp_max}</td></tr>);
             this.setState({data:data});
             console.log(data);
           }.bind(this),
           error: function (xhr, status, err) {
             console.error(this.props.url, status, err.toString());
           }.bind(this)
       });
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
 });
},
search: function(e)
 {
   this.setState({city:e.target.value});
 },
 render: function() {
   return(
         <div>
            <input type="text" onChange={this.search}/>
            <button className="btn btn-default" onClick={this.allWeather}>
            Add
          </button>
          <table className="table table-bordered table-inverse">
          <tbody>{rows}</tbody>
          </table>
         </div>
   );
 }
});
module.exports=WeatherComponent;

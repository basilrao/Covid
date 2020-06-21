import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Summary.css"




class Summary extends React.Component {

    render() {
        const { summary, currentDate, country } = this.props;
        console.log(country.TotalRecovered);

        return (
            <React.Fragment>
                <h1 className="main-h2">Made By:Muhammad Basil</h1>

                <h1 className="main-h1">Global Statistics(<span>{new Date(currentDate).toDateString()}</span>)</h1>

                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>New Cases:</h3>
                        <h1>{summary.NewConfirmed}</h1>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>Total Cases:</h3>
                        <h1>{summary.TotalConfirmed}</h1>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>Total Deaths:</h3>
                        <h1>{summary.TotalDeaths}</h1>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>Total Recovered:</h3>
                        <h1>{summary.TotalRecovered}</h1>

                    </div>
                </div>
                <h1 className="main-h1">Pakistan Statistics(<span>{new Date(currentDate).toLocaleDateString()}</span>)</h1>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>New Cases:</h3>
                        <h1>{country.NewConfirmed}</h1>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>Total Cases:</h3>
                        <h1>{country.TotalConfirmed}</h1>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>Total Deaths:</h3>
                        <h1>{country.TotalDeaths}</h1>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h3>Total Recovered:</h3>
                        <h1>{country.TotalRecovered}</h1>

                    </div>
                </div>
                
                    
               

            </React.Fragment>
        )
    }


}
export default Summary;
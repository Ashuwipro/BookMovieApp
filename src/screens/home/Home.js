import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      upcomingMovies: [],
      releasedMovies: [],
      genres: [],
      artists: [],
      genresList: [],
      artistsList: [],
      releaseDateStart: "",
      releaseDateEnd: "",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header baseUrl={this.props.baseUrl} />

        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
      </div>
    );
  }
}

export default Home;

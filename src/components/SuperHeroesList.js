import React from "react";
import { connect } from "react-redux";
import { fetchSuperHeroes } from "../actions";

class SuperHeroesList extends React.Component {
  componentDidMount() {
    this.props.fetchSuperHeroes();
  }

  renderList() {
    if (!this.props.superheroes) {
      return <div>Loading...</div>;
    }

    const superHeroesList = this.props.superheroes.map((superheroe) => {
      return <p>{superheroe.data.name}</p>;
    });

    return superHeroesList;
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { superheroes: state.superheroes };
};

export default connect(mapStateToProps, { fetchSuperHeroes: fetchSuperHeroes })(
  SuperHeroesList
);

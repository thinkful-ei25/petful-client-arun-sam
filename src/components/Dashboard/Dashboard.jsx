import React from 'react';
import { connect } from 'react-redux';

import Pet from '../Pet';
import {
  fetchCat as fetchCatAction,
  fetchDog as fetchDogAction,
  adoptCat,
  adoptDog,
} from '../../actions';

export class Dashboard extends React.Component {
  render() {
    const { catToAdopt, dogToAdopt, onAdoptDog, onAdoptCat } = this.props;
    return (
      <main>
        <Pet pet={catToAdopt} onAdoptPet={onAdoptCat} />
        <Pet pet={dogToAdopt} onAdoptPet={onAdoptDog} />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  catToAdopt: state.cat.cat,
  dogToAdopt: state.dog.dog,
});

const mapDispatchToProps = () => ({
  fetchDog: fetchDogAction,
  fetchCat: fetchCatAction,
  onAdoptDog: adoptDog,
  onAdoptCat: adoptCat,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

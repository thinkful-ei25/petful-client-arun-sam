import React from 'react';
import { connect } from 'react-redux';

import Pet from '../Pet';
import {
  fetchCat as fetchCatAction,
  fetchDog as fetchDogAction,
  adoptCat,
  adoptDog,
} from '../../actions';

import './Dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchDog, fetchCat } = this.props;
    fetchDog();
    fetchCat();
  }

  render() {
    const {
      catToAdopt,
      dogToAdopt,
      onAdoptDog,
      onAdoptCat,
      dogLoading,
      catLoading,
    } = this.props;
    return (
      <div>
        <header>
          <h1>Petful Pet Adoption Agency</h1>
        </header>
        <main className="Dashboard__container">
          <Pet pet={catToAdopt} loading={catLoading} onAdoptPet={onAdoptCat} className="Dashboard__pet"/>
          <Pet pet={dogToAdopt} loading={dogLoading} onAdoptPet={onAdoptDog} className="Dashboard__pet"/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  catToAdopt: state.cat.cat,
  dogToAdopt: state.dog.dog,
  catLoading: state.cat.loading,
  dogLoading: state.dog.loading,
});

const mapDispatchToProps = {
  fetchDog: fetchDogAction,
  fetchCat: fetchCatAction,
  onAdoptDog: adoptDog,
  onAdoptCat: adoptCat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

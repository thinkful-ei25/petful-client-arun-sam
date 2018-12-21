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
          <h1 className="header">Petful Pet Adoption Agency</h1>
        </header>
        <main className="Dashboard__container">
          <div className="Dashboard__info">
            <h2>About Us</h2>
            <p>
              Welcome to the Petful Pet Adoption Agency! We run a tight ship around here, but we love
              every pet that walks through the door. So long as they're a dog or cat, we'll take them and you can adopt them.
            </p>
            <h2>Rules</h2>
            <ol>
              <li>Your only choice is between adopting a cat or a dog.</li>
              <li>You may not choose which dog or which cat you wish to take home.</li>
              <li>We believe in a fair adoption process, so all dogs and cats are adopted on a first-in, first-out basis.</li>
              <li>New dogs and cats given to the agency will be up for adoption after all previous cats or dogs have been adopted.</li>
              <li>No fish, no rabbits, no rodents, no reptiles, no birds, no livestock.</li>
              <li>NO TARANTULAS!!! Not after the last incident...</li>
            </ol>
          </div>
          <Pet pet={catToAdopt} loading={catLoading} onAdoptPet={onAdoptCat} className="Dashboard__pet" type="cat"/>
          <Pet pet={dogToAdopt} loading={dogLoading} onAdoptPet={onAdoptDog} className="Dashboard__pet" type="dog"/>
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

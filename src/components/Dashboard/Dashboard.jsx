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
      <main>
        <Pet pet={catToAdopt} loading={catLoading} onAdoptPet={onAdoptCat} />
        <Pet pet={dogToAdopt} loading={dogLoading} onAdoptPet={onAdoptDog} />
      </main>
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

import React, {Component} from 'react';

import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/dispatcher';

import './styles.css';

function Surface() {
  return (
    <div className="app--surface surface">
      <section className="surface__peritop"></section>
      <section className="surface__sky"></section>
      <section className="surface__clouds"></section>
      <section className="surface__water"></section>
      <section className="surface__nearwater"></section>
      <section className="surface__ship"></section>
      <section className="surface__peribot"></section>
    </div>
  );
}

export default connect(selector, dispatcher)(Surface);
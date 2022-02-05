import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';
import Banner from '../../components/Sections/Banner';
import Record from '../../components/Record'

export default function CounterPage() {
  return (
    <DefaultLayout>
      <Banner title="Voice Recorder/Player" />
      <div className="container">
        <Record />
      </div>
    </DefaultLayout>
  );
}

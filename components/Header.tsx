import {Appbar} from 'react-native-paper';

import React from 'react';

export default function Header({onChangePage}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            onChangePage('Dashboard');
          }}
        />
        <Appbar.Content title=" HealthTrack" />
        <Appbar.Action
          icon="calendar"
          onPress={() => {
            onChangePage('Dashboard');
          }}
        />
        <Appbar.Action
          icon="magnify"
          onPress={() => {
            onChangePage('Activity Tracking');
          }}
        />
      </Appbar.Header>
    </>
  );
}

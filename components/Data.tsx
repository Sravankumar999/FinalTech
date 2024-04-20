import React from 'react';
import {View} from 'react-native';
import Activity from './Activity';
import Dashboard from './Dashboard';

export default function Data({pag}) {
  let text: String = 'Dashboard';
  if (pag === 'Activity Tracking') {
    text = 'Activity';
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {text === 'Dashboard' && <Dashboard />}
      {text === 'Activity' && <Activity />}
    </View>
  );
}

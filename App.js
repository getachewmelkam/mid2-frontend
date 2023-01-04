import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import employee from './employee';
import teacher from './teacher';
import student from './student';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='employee' component={employee}/>
        <Tab.Screen name="teacher" component={teacher} />
        <Tab.Screen name="student" component={student} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
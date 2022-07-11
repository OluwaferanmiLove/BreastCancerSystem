import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminHome, Daignose, Login, OnBoarding, PreviousDiagnosis, SignUp } from '../screens';
import { colors } from '../constants/colors';
import { AppContext } from '../context/AppContext';

const MainStack = createStackNavigator()


export default function AUHighSchool() {
  const {state} = useContext(AppContext);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.mainBg
          }
        }}>
          {!state.loggedin ? (
            <>
              <MainStack.Screen component={OnBoarding} name={'OnBoarding'} />
              <MainStack.Screen component={Login} name={'Login'} />
              <MainStack.Screen component={SignUp} name={'SignUp'} />
            </>
          ) : (
            <>
              {state.user.role === 'user' && (
              <MainStack.Screen component={AdminHome} name={'AdminHome'} />
              )}
                <MainStack.Screen component={Daignose} name={'Daignose'} />
                <MainStack.Screen component={PreviousDiagnosis} name={'PreviousDiagnosis'} />
            </>
          )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

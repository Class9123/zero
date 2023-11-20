import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../components/Icons';
import useThemeColors from '../hooks/useThemeColors';
import ReportsScreen from '../screens/ReportsScreen';
import DebtsScreen from '../screens/DebtsScreen';
import AddTransactionsScreen from '../screens/AddTransactionsScreen';
import UpdateTransactionScreen from '../screens/UpdateTransactionScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';

const screenOptions = {
  headerShown: false,
};

const HomeIcon = ({color}: any) => (
  <View style={{alignItems: 'center'}}>
    <Icon
      name={'exposure-zero'}
      size={28}
      type={'MaterialIcons'}
      color={color}
    />
    <Text style={[styles.labelText, {color: color}]}>Dashboard</Text>
  </View>
);

const ReportsIcon = ({color}: any) => (
  <View style={{alignItems: 'center'}}>
    <Icon name={'analytics'} size={25} type={'MaterialIcons'} color={color} />
    <Text style={[styles.labelText, {color: color}]}>Reports</Text>
  </View>
);

const DebtIcon = ({color}: any) => (
  <View style={{alignItems: 'center'}}>
    <Icon name={'credit-card'} size={25} type={'MaterialIcons'} color={color} />
    <Text style={[styles.labelText, {color: color}]}>Debts</Text>
  </View>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  const colors = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.buttonText,
        tabBarInactiveTintColor: colors.secondaryBackground,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.accentGreen,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
          tabBarStyle: {
            backgroundColor: colors.primaryText,
            height: 55,
          },
        }}
      />
      <Tab.Screen
        name="ReportsScreen"
        component={ReportsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ReportsIcon,
          tabBarStyle: {
            backgroundColor: colors.primaryText,
            height: 55,
          },
        }}
      />
      <Tab.Screen
        name="DebtsScreen"
        component={DebtsScreen}
        options={{
          headerShown: false,
          tabBarIcon: DebtIcon,
          tabBarStyle: {
            backgroundColor: colors.primaryText,
            height: 55,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="AddTransactionsScreen"
        component={AddTransactionsScreen}
      />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen
        name="UpdateTransactionScreen"
        component={UpdateTransactionScreen}
      />
      <Stack.Screen name="AddCategoryScreen" component={AddCategoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});

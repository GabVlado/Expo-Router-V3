import { View, Text } from 'react-native'
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='one'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name='home' size={size} color={color}/>
                    ),
                    tabBarAccessibilityLabel: 'Home Tab',
                    tabBarLabelStyle: {
                        fontSize: 16
                    }


                }}
            />
            <Tabs.Screen
                name='two'
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({size, color}) =>(
                        <Ionicons name='person' size={size} color={color}/>
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16
                    },
                    headerTitle: 'Two',

                }}
            />
            <Tabs.Screen
                name='three'
                options={{
                    tabBarLabel: 'Drawer Menu',
                    tabBarIcon: ({size, color}) =>(
                        <Ionicons name='grid-outline' size={size} color={color}/>
                    ),
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 16
                    }

                }}
            />


        </Tabs>
    )
}

export default Layout

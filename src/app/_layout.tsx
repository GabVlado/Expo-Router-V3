import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

const LayoutPage = () => {
    return (
        <Stack >
            <Stack.Screen
                name='index'
                options={{
                    title:'Home'
                }}
            />
            <Stack.Screen
                name='(tabs)'
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name='modal'
                options={{
                    presentation: 'modal',
                }}

            />
        </Stack>
    )
}

export default LayoutPage

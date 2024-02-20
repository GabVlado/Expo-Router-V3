import { View, Text } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'

const Layout = () => {

    const params= useLocalSearchParams();
    return (
        <Stack>
            <Stack.Screen options={{ headerShown: true , headerTitle: 'Index '}} name='index' />

        </Stack>
    )
}

export default Layout

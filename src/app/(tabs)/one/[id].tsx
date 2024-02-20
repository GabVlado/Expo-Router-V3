import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const Page = () => {

    const { id } = useLocalSearchParams<{ id: string }>()
    return (
        <View>
            <Stack.Screen
                options={{
                    title: id.toString()
                }}
            />
            <Text>Id Page: {id}</Text>
        </View>
    )
}

export default Page

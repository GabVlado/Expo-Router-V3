import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'

const Page = () => {
    return (
        <View>
            <Link href={"/"} replace   asChild >
                <Pressable>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
                        Logout
                    </Text>
                </Pressable>
            </Link>
            <Link href={"/(tabs)/one/details"}   asChild >
                <Pressable>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
                        Details
                    </Text>
                </Pressable>
            </Link>
            <Link href={"/(tabs)/one/42"}   asChild >
                <Pressable>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
                        Details 42
                    </Text>
                </Pressable>
            </Link>
            <Link href={"/(tabs)/one/123"}   asChild >
                <Pressable>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
                        Details 123
                    </Text>
                </Pressable>
            </Link>
            <Link href={"/modal"}   asChild >
                <Pressable>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
                        Open Modal
                    </Text>
                </Pressable>
            </Link>
            <Link href={"/(aux)/disclaimer"}   asChild >
                <Pressable>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
                        Open Disclaimer
                    </Text>
                </Pressable>
            </Link>

        </View>
    )
}

export default Page

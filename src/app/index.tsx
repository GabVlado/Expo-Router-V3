import { Link, useRouter } from 'expo-router';
import { View, Text, Button, Pressable } from 'react-native';


const Home = () => {

    const router =useRouter();


    return (
        <View >
            {/* <Button onPress={() => router.push("/register")} title='Open Register'  /> */}
            <Link href={"/register"} asChild >
                <Pressable>
                    <Text style={{marginTop: 50 ,textAlign: 'center',fontSize: 20}}>Open Register with Link</Text>
                </Pressable>
            </Link>
            <Link href={"/(tabs)/one"} replace asChild >
                <Pressable>
                    <Text style={{marginTop: 20 ,textAlign: 'center', fontSize: 20}}>
                        Login
                    </Text>
                </Pressable>
            </Link>
        </View>
    )
}

export default Home

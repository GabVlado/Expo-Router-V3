import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const ThreeLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="page1"
                    options={{
                        drawerLabel: 'Page 1',
                        title: 'Drawer Menu',

                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default ThreeLayout

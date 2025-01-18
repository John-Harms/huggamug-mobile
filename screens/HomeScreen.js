import { View, Text, StyleSheet } from "react-native";

function HomeScreen() {
    return(
        <View style={styles.mainContainer}>
            <Text>MAIN SCREEN!!!!!!</Text>
          </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: 'Black',
        borderWidth: 4
    }
})
import { View, Text, StyleSheet } from "react-native";

function Drinks() {
    return(
        <View style={styles.mainContainer}>
            <Text>DRINK SCREEN!!!!!!</Text>
          </View>
    );
}

export default Drinks;

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: 'Black',
        borderWidth: 4
    }
})
import {useState} from 'react'
import { Button, StyleSheet,Text,View } from "react-native"

export default function Compteur() {
    const [valeur, setValeur] = useState(0)


    return (
    <View style={styles.contenair}>
        <Text style={styles.compteur}>{valeur}</Text>
        <View style={styles.boutons}>
            <Button 
            title="-"
            onPress={() => setValeur(valeur -1)}
            />
            <Button title="Réinitialiser" onPress={() => setValeur(0)}/>
            <Button 
            title="+"
            onPress={() => setValeur(valeur +1)}
            />
        </View>
    </View>
)
}


const styles = StyleSheet.create({
    contenair: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    compteur: {
        fontSize: 48,
        marginBottom:20,
        
    },
    boutons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:250

    }
})
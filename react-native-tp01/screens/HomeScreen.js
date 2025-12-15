import { ButtonCustom, HeaderTitle, ScreenWrapper } from "../components"

export const HomeScreen = () => {
    return (
        <ScreenWrapper>
            <HeaderTitle text="Connexion / Inscription" />
            <ButtonCustom text="Connexion" onPress={() => navigation.navigate('Connexion')} />
            <ButtonCustom text="Inscription" onPress={() => navigation.navigate('inscription')}
            secondary />




        </ScreenWrapper>
       
    )
}
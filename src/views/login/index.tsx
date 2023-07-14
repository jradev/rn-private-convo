import { PropsWithChildren, useState } from "react";
import { Button, FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput, useWindowDimensions } from "react-native";
import { Box } from "react-native-design-utility";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { CONVERSATION_VIEW } from "../../utils/constant";
import { theme } from "../../utils/theme";


export default function Login(props: PropsWithChildren): JSX.Element{
    
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const [name, setName] = useState<string>(null);



    const onChangeName = (e: string): void => {
        setName(e);
    }

    const onSignIn = async () => {
        // auth().signInAnonymously().then((credential: FirebaseAuthTypes.UserCredential) => {
        //     console.log(credential)
        // })
        try{
            const newReg = await auth().signInAnonymously()
            firestore().collection('users').doc(newReg.user.uid).set({
              name: "",
              uid: newReg.user.uid
            })
        }catch(err){;
      
        }
        // navigation.navigate(CONVERSATION_VIEW)
      }
    return (
        <Box f={1} center>
            <Box border={1} w={'90%'} center borderRadius={'xs'} style={{
                borderWidth: StyleSheet.hairlineWidth,
                height: theme.space.lg,
            }}>
            <TextInput 
            placeholder="Name"
            style={{
                fontFamily: theme.text.fonts.base,
                fontSize: theme.text.fonts.base,
                padding: theme.space.xs
            }}
            maxLength={15}
            defaultValue={name}
            onChangeText={onChangeName}
            />
            </Box>
            <Button 
            title="Sign in Anonymously"
            onPress={onSignIn}
            disabled={!name?.trim()}
            />
        </Box>
    );
}
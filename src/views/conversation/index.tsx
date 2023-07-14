import { PropsWithChildren, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, useWindowDimensions } from "react-native";
import { Box } from "react-native-design-utility";
import { Bubble } from "../../components/bubble";
import { ChatInput } from "../../components/chat-input";

import firestore from '@react-native-firebase/firestore';

import { styles } from "./style";


export default function Conversation(props: PropsWithChildren): JSX.Element{
    
    const keyboardVerticalOffset: number = Platform.OS === 'ios' ? 48 : 0;

    const [converastion, setConversation] = useState([{
        message: 'This is a message'
    }]);
    const [users, setUsers] = useState(null);

    const getUsers = async ()=> {
        // const querySanp = await firestore().collection('users').where('uid','!=',user.uid).get()
        // const allUsers = querySanp.docs.map(docSnap=>docSnap.data())
        // setUsers(allUsers)
      }

    return (
        <Box f={1}>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
            <Box f={1}>
                <FlatList
                data={converastion ?? []}
                style={styles.container}
                inverted
                // contentContainerStyle={styles.container}
                keyExtractor={(e) => e.message}
                renderItem={({item}) => (<Bubble {...item} />)}
                />
            </Box>
            <Box  f={0} style={{marginTop: 'auto'}}>
                <ChatInput />
            </Box>
            </KeyboardAvoidingView>
        </Box>
    );
}
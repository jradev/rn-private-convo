import { PropsWithChildren, useCallback, useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Box, Text } from "react-native-design-utility";
import { theme } from "../../utils/theme";




export function ChatInput(props: PropsWithChildren): JSX.Element {
    const [text, setText] = useState<string>(null);
    
    const onChangeText = (e: string) => {
        setText(e);
    };

    const onSend = useCallback(() => {
        console.log(text)
    }, [text]);
    
    return (
        <Box border={1} 
        dir="row"
        alignItems="center"
        style={{
            borderWidth: StyleSheet.hairlineWidth,
            minHeight: theme.space.lg, 
            padding: theme.space.xs,
        }}>
            <Box f={1}>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    defaultValue={text}
                    onChangeText={onChangeText}
                    style={{
                        fontSize: theme.text.size.base,
                        fontFamily: theme.text.fonts.base
                    }}
                />
            </Box>
            <Box>
                <Button 
                    title="Send"
                    disabled={!text}
                    onPress={onSend}
                />
            </Box>
        </Box>
    )
}
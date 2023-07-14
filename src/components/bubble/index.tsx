import { PropsWithChildren } from "react";
import { Box, Text } from "react-native-design-utility";


type BubleProps = PropsWithChildren<{
  message: string;
  sender?: boolean;
}>;


export function Bubble({ message, sender }: BubleProps): JSX.Element {
    const containerColor: string = sender ? "blueLighter" : "greyLighter";
    const textColor: string = sender ? "white" : "greyDarkest";
    
    return (
        <Box backgroundColor={containerColor} p={'xs'}>
            <Text color={textColor} >{message}</Text>
        </Box>
    )
}
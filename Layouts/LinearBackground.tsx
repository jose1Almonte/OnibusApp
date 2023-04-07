import {ReactNode} from 'react';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface LinearBackgroundProps {
    children: ReactNode;
    colors: string[];
    start: { x: number; y: number };
    end: { x: number; y: number };
    style: any;
  }

export const LinearBackground = ({
    children,
    colors,
    start,
    end,
    style,
    }: LinearBackgroundProps) => {
    return (
        <View style={[styles.backGround , style]}>
            <LinearGradient colors={colors} start={start} end={end} style={styles.gradient}>
                {children}
            </LinearGradient>
        </View>
    );
};

// export default LinearBackground;

const styles = StyleSheet.create({
    backGround: {
      // backgroundColor: '#4FB0CE',
      // mixBlendMode: 'normal',
      // height: '100%',
        flex: 1,
    },

    gradient: {
        flex: 1,
    },

    // titleBox:{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});

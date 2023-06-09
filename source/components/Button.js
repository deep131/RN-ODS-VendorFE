import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../styles/variables';

const Button=({name, 
    onPress, 
    color, 
    needLoading, 
    bottom, 
    position,top,
    buttonTextColor,
    disableTrue})=>{
    return (
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            height: responsiveHeight(7),
            width: responsiveWidth(80),
            borderRadius: borderRadius.semiLarge,
            bottom: bottom,
            top:top,
            position: position,
            marginTop:spaceVertical.large
          }}
          activeOpacity={0.7}
          onPress={onPress}
          disabled={disableTrue}
          >
          {needLoading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={[styles.text,{ color:  buttonTextColor ? buttonTextColor : colors.white,fontFamily:fontFamily.semiBold}]}>{name}</Text>
          )}
        </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
      text: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.normal,
      },
    });

    
    export default Button;

import React from 'react';
import { TextInputProps } from 'react-native';
export declare const mask: (mask: string, value: string, autocomplete: boolean) => Promise<string>, unmask: (mask: string, value: string, autocomplete: boolean) => Promise<string>, setMask: (reactNode: number, mask: string, autocomplete: boolean, autoskip: boolean) => void;
declare const TextInputMask: React.ForwardRefExoticComponent<TextInputMaskProps & React.RefAttributes<Handles>>;
export declare const useEffectAsync: (operation: () => Promise<void>, deps?: React.DependencyList | undefined) => void;
export interface TextInputMaskProps extends TextInputProps {
    mask?: string;
    onChangeText?: (formatted: string, extracted?: string) => void;
    /**
     * autocomplete pattern while editing text
     */
    autocomplete?: boolean;
    /**
     * automatically remove mask characters on backspace
     */
    autoskip?: boolean;
}
interface Handles {
    focus: () => void;
    blur: () => void;
}
export default TextInputMask;

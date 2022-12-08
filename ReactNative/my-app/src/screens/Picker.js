import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Dropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);


    // const Dropdown = () => {


    //     return (
    //         <Picker
    //             selectedValue={selectedLanguage}
    //             onValueChange={(itemValue, itemIndex) =>
    //                 setSelectedLanguage(itemValue)
    //             }>

    //             <Picker.Item label="Java" value="java" />
    //             <Picker.Item label="JavaScript" value="js" />
    //         </Picker>
    //     )

    // };


    const lista = [
        {
            value: '1',
            label: 'Javascript'
        },
        {
            value: '2',
            label: 'Java'
        },
        {
            value: '3',
            label: 'Php'
        },
        {
            value: '4',
            label: 'Typecript'
        },

    ]

    // const pickerRef = useRef();

    // function open() {
    //     pickerRef.current.focus();
    // }

    // function close() {
    //     pickerRef.current.blur();
    // }

    return (
        <View>

            <SafeAreaView>

                <Picker
                    prompt='Selecione um item'
                    mode='dialog'
                    selectedValue={selectedLanguage}
                    onValueChange={(value, index) => {
                        console.log('Item selecionado =>', value, index)
                        setSelectedLanguage(value)
                    }}>
                    {
                        lista.map((item) => {
                            return < Picker.Item
                                key={item.value}
                                value={item.value}
                                label={item.label}
                            />
                        })
                    }
                </Picker>

            </SafeAreaView>
        </View>
    )
};

export default Dropdown;
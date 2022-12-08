import React, { useState, useEffect } from 'react';
// import RNPickerSelect from 'react-native-picker-select'; //Não deu certo erro em alguma dependência

import { View, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';



// const Dropdown = () => {
//     return (
//         <View>

//             <RNPickerSelect
//                 onValueChange={(value) => console.log(value)}
//                 items={[
//                     { label: 'Football', value: 'football' },
//                     { label: 'Baseball', value: 'baseball' },
//                     { label: 'Hockey', value: 'hockey' },
//                 ]}
//             />
//         </View>
//     );
// };

// const selectedItem = {
//     title: 'Selected item title',
//     description: 'Secondary long descriptive text ...',
// };

// export const Dropdown = () => {
//     return (
//         <View>
//             <RNPickerSelect
//                 pickerProps={{
//                     accessibilityLabel: selectedItem.title,
//                 }}
//             >
//                 <Text>{selectedItem.title}</Text>
//                 <Text>{selectedItem.description}</Text>
//             </RNPickerSelect>
//         </View>
//     );
// };

// export default Dropdown;
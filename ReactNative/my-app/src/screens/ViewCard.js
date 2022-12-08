import * as React from 'react';
import { Button, View, StyleSheet, Alert, SafeAreaView, Text } from 'react-native';
// import { Provider as StoreProvider } from 'react-redux';
import {
    Avatar,
    Card,
    Title,
    Paragraph,
    DefaultTheme,
    IconButton,
    Provider as
        PaperProvider
} from 'react-native-paper';

import { theme } from '../styles/Theme';



const tema = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ff5100',
        secondary: 'green',


    },
    fonts: {
        fontFamily: "RobotoSlab_700Bold",
    },
};
const cor = tema.colors;
const fonteTexto = tema.fonts;
const LeftContent = props => <Avatar.Icon {...props} style={{ backgroundColor: "#424242", alignItems: "center", marginTop: 3 }} icon="react" />

const CustomCard = ({ name, email, sex, age, onPress, id }) => {

    // console.log("PROPS =>", props) //PROPS => propriedades

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <Card style={styles.content}>
                    <Card.Title left={LeftContent} />

                    <Text
                        style={[{ display: "flex", lineHeight: 30 }]}
                    >
                        Nome:{" "}
                        <Text style={{color: '#9400d3'}}>
                            {name}
                        </Text>
                        {'\n'}
                        Email: {" "}
                        <Text style={{color: '#9400d3'}}>
                            {email}
                        </Text>
                        {'\n'}
                        Gênero: {" "}
                        <Text style={{color: '#9400d3'}}>
                            {sex}
                        </Text>
                        {'\n'}
                        Idade: {" "}
                        <Text style={{color: '#9400d3'}}>
                            {age}
                        </Text>
                    </Text>


                    {/* <Card.Content>
                        <Title style={{ color: cor.primary, fontFamily: fonteTexto.fontFamily }} >Dados do usuario</Title>

                        <Paragraph style={{ color: 'black', fontFamily: fonteTexto.fontFamily }}>{name}</Paragraph>
                        <Paragraph style={{ color: 'black', fontFamily: fonteTexto.fontFamily }}>{email}</Paragraph>
                        <Paragraph style={{ color: 'black', fontFamily: fonteTexto.fontFamily }}>{sex}</Paragraph>
                        <Paragraph style={{ color: 'black', fontFamily: fonteTexto.fontFamily }}>{age}</Paragraph>
                    </Card.Content> */}

                    <Card.Cover style={{ marginTop: '3%', marginBottom: '3%', width: '100%', alignSelf: 'center' }} source={{ uri: 'https://picsum.photos/700' }} />

                    <Card.Actions style={styles.contentButton}>
                        {/* <Button style={[styles.button]}>Ir ao usuario</Button> */}
                        <Button
                            // style={styles.button}
                            title="Ir ao usuario"
                            color="#005100"
                            onPress={() => onPress(id)}
                        />
                    </Card.Actions>


                </Card>

            </SafeAreaView >
        </View >


    );
}



// const CustomCard = ({title, subtitle, props}) => (


//     <Card style={styles.content}>
//             <Card.Title title={title} subtitle={subtitle} left={LeftContent} />

//             {/* <Card.Content>
//             <Title style={{ color: 'black', fontFamily: fonteTexto.fontFamily }} >Card title</Title>
//             <Paragraph>Card content</Paragraph>
//         </Card.Content> */}

//             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//             <View style={styles.contentButton}>

//                 <Card.Actions>
//                     {/* <Button style={[styles.button]}>Ir ao usuario</Button> */}
//                     <Button

//                         title="Ir ao usuario"
//                         color="#ff5100"

//                     // onPress={() => )}
//                     />
//                 </Card.Actions>
//             </View>

//         </Card>
// );


// const CustomCard = (title, subtitle) => (

//     <View >

//         <Card.Title
//             title={title}
//             subtitle={subtitle}
//             left={LeftContent}
//             right={(props) => <IconButton {...props} icon="email" />}
//         />

//     </View>

// );


export default CustomCard;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        // marginBottom:"-12%"
    },
    contentButton: {
        marginBottom: '3%',
        alignSelf: 'center',
    }
})
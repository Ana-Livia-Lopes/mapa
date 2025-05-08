import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native'; // Adicionando as importações necessárias

const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const TentarLogar = () => {
        if (!email || !password) {
            Alert.alert("Atenção", "Preencha todos os campos");
            return;
        }

        setLoading(true);

        const emailCorreto = "sesi@gmail.com";
        const senhaCorreta = "707070";

        setTimeout(() => {
            if (email === emailCorreto && password === senhaCorreta) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Perfil' }],
                });
            } else {
                Alert.alert("Erro", "Email ou senha inválidos");
            }
            setLoading(false);
        }, 1000);
    };

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                style={{ flex: 1 }}
            >
        <View style={styles.container}>
                <View style={styles.efeitoBranco}>
                    <Image source={require("../../assets/logo.png")} style={styles.imagem} />
                    <Text style={styles.title}>Login</Text>

                    <TextInput
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        style={styles.input}
                        placeholderTextColor="#999999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Senha"
                        onChangeText={setPassword}
                        value={password}
                        style={styles.input}
                        secureTextEntry={true}
                        placeholderTextColor="#999999"
                    />

                    <Pressable style={styles.botao} onPress={TentarLogar} disabled={loading}>
                        <Text style={styles.botaoTexto}>
                            {loading ? 'Carregando...' : 'Entrar'}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#924DBF',
        height: '100%',
    },
    efeitoBranco: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 333,
        borderBottomRightRadius: 333,
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#4A2574',
        marginBottom: 30,
    },
    input: {
        width: '90%',
        padding: 15,
        borderRadius: 28,
        backgroundColor: '#e8e8e8',
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },
    botao: {
        backgroundColor: '#924DBF',
        padding: 15,
        borderRadius: 26,
        width: '60%',
        alignItems: 'center',
        elevation: 3,
        marginTop: 30,
    },
    botaoTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imagem: {
        marginBottom: 10,
        width: 200,
        height: 200
    }
});

export default RealizarLogin;

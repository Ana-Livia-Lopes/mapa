// Ana Lívia dos Santos Lopes nº1 DS
// Isadora Gomes da Silva nº 9

import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroUsuario() {
  const [novaSenha, setNovaSenha] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novoEmail, setNovoEmail] = useState('sesi@gmail.com');
  const [nome, setNome] = useState('sesi');
  const navigation = useNavigation();

  const atualizarCredenciais = () => {
    if (!senhaAtual) {
      Alert.alert('Erro', 'Digite sua senha atual');
      return;
    }

    // Simulando atualização
    Alert.alert('Sucesso', 'Credenciais atualizadas com sucesso!');
    setSenhaAtual('');
    setNovaSenha('');
  };

  const handleLogout = () => {
    // Simulando logout
    Alert.alert('Logout', 'Você saiu com sucesso!');
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Perfil do usuário</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoValue}>{nome}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{novoEmail}</Text>
        </View>

        <TouchableOpacity onPress={handleLogout} style={styles.updateButton}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f1fa',
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    shadowColor: '#7f5af0',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f9f5ff',
    borderColor: '#a855f7',
    borderWidth: 2,
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    backgroundColor: '#7c3aed',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  infoBox: {
    backgroundColor: '#e9d5ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#6a0dad',
    fontSize: 14,
  },
  infoValue: {
    color: '#4c1d95',
    fontSize: 16,
  },
});

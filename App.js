import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from 'react-native';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === '') return;
    setListaTareas([...listaTareas, { id: Date.now().toString(), text: tarea }]);
    setTarea('');
  };

  const eliminarTarea = (id) => {
    setListaTareas(listaTareas.filter(t => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Mis Tareas 📝</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe una tarea..."
          placeholderTextColor="#888"
          value={tarea}
          onChangeText={text => setTarea(text)}
        />
        <TouchableOpacity style={styles.boton} onPress={agregarTarea}>
          <Text style={styles.botonTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listaTareas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemTarea}>
            <Text style={styles.textoTarea}>{item.text}</Text>
            <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
              <Text style={styles.eliminarBoton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  boton: {
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    marginLeft: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemTarea: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 1,
  },
  textoTarea: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  eliminarBoton: {
    fontSize: 16,
  },
});

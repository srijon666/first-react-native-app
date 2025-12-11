import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const settings = () => {
  const [username, setUsername] = React.useState('');
  const [randomRepoName, setRandomRepoName] = React.useState("");

  const fetchRandomRepo = () => {
    console.log(username);
    
    // FIX 1: Changed single quotes ' ' to backticks ` `
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        // FIX 2: Check if data is an array before trying to read it
        // (Prevents crash if username is not found)
        if (Array.isArray(data) && data.length > 0) {
            setRandomRepoName(data[Math.floor(Math.random() * data.length)].name);
        } else {
            setRandomRepoName("User not found or no public repos");
        }
    })
    .catch(error => console.error('Error fetching repos:', error));
  };

  return (
    <View style={styles.container}>
      <Text>settings</Text>
      
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername} 
        placeholder='Enter Your GitHub user name' 
      />
      
      {/* Button is self-closing */}
      <Button title="Fetch Repos" onPress={fetchRandomRepo} />
      
      <Text style={styles.repoName}>
          Random Repo: {randomRepoName}
      </Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 20,
        padding: 10,
        fontSize: 18,
        backgroundColor: 'white'
    },
    repoName: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
    }
});
import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { KeyboardAvoidingView } from 'react-native';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;


    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('User created successfully');
        } catch (error) {
            console.log(error);
            alert('SignIn failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }


    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndpassword(auth, email, password);
            console.log(response);
            alert('Check your email');
        } catch (error) {
            console.log(error);
            alert('Registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>

                {loading ? ( <ActivityIndicator size="large" color="#0000ff" />
                ): (
                    <>
                        <Button title="Login" onPress={signIn} />
                        <Button title="Create Account" onPress={signUp} />
                    </>
                )}



            </KeyboardAvoidingView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});


 export default Login;

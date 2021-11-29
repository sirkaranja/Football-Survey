import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { data } from '../data'
console.log('data', data)
const SurveyScreen = ({navigation}) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
    }, []);

    return (
        <View style={styles.container}>
            {
                data && (
                    <View style={styles.parent}>
                        <View style={styles.question}>
                            <Text style={styles.questionText}>{`Q.  ${data[number]?.question}`}</Text>
                        </View>
                        <View style={styles.answers}>
                            {
                                data[number]?.answers.map((answer, index) => (
                                    <TouchableOpacity style={styles.answerButton} key={index}>
                                        <Text style={styles.answer}>{answer}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>SKIP</Text>
                            </TouchableOpacity>

                            {
                                number === 3 ? (
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => navigation.navigate('Completed')}
                                    >
                                        <Text style={styles.buttonText}>SUBMIT</Text>
                                    </TouchableOpacity>
                                ): (
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => setNumber(number+1)}
                                    >
                                        <Text style={styles.buttonText}>NEXT</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                )
            }

        </View>
    )
}

export default SurveyScreen

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    footer: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    question: {
        marginVertical: 16,
    },
    answers: {
        marginVertical: 16,
        flex: 1,
    },
    button: {
        paddingHorizontal: 16,
        backgroundColor: '#A60FED',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    },
    questionText: {
        fontSize: 28,
    },
    answer: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black'
    },
    answerButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#AFCEFB',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%'
    }
})

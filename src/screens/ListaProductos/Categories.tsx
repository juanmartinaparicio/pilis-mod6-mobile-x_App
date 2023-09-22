import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Categories() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.list}>
                    <ScrollView
                        contentContainerStyle={styles.listContent}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {[
                            {
                                name: 'Hamburguesas',
                                value: "hamburguesas",
                                color: '#F7EDD0',
                            },
                            {
                                name: "Bebidas",
                                value: "bebidas",
                                color: '#F1DFC5',
                            },
                            {
                                name: "Sandwiches",
                                value: "sandwiches",
                                color: '#B2DCC4',
                            },
                            {
                                name: "Pizzas",
                                value: "pizzas",
                                color: '#F7C5BA',
                            },
                            {
                                name: "Postres",
                                value: "postres",
                                color: '#F7C5BA',
                            },
                        ].map(({ name, color }, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    // handle onPress
                                }}
                            >
                                <View style={[styles.card, { backgroundColor: color }]}>
                                    <Text style={styles.cardLabel}>{name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 0,
    },
    title: {
        paddingHorizontal: 24,
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 12,
    },
    listContent: {
        paddingVertical: 12,
        paddingHorizontal: 18,
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    listTitle: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 28,
        color: '#323142',
    },
    listAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    listActionText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#706f7b',
        marginRight: 2,
    },
    card: {
        width: 80,
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    cardImg: {
        width: 40,
        height: 40,
        marginBottom: 12,
    },
    cardLabel: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 18,
        color: '#252117',
    },
    list: {
        marginBottom: 14,
    },
});

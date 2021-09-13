import React from 'react';
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';
import Item from './Item';


const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 80.50,
        descricao: "Não de banho no seu gato, mas se precisar nós damos!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 90.00,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas doses.",
    },
    {
        id: 3,
        nome: "Vacina antirrábica",
        preco: 100.00,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    }
]


export default function Servicos() {
    return <SafeAreaView>
        <StatusBar />
        <Text>Serviços!</Text>
        <FlatList 
            data={servicos}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>
}
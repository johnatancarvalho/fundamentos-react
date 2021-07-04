import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'



export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Mega" color="#f40b32">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#77c593">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#e75874">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super sobrenome="Freitas"></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#ecc19c">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#ecc19c">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#1e3d59">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#ffc13b">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#ff6e40">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetro" color="#ecc19c">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"></ComParametro>
                <ComParametro titulo="opa" subtitulo="Epa"></ComParametro>
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#1e3d59">
                <Primeiro />
            </Card>
        </div>
    </div>
)
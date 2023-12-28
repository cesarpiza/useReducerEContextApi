import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker'

const UserContext = createContext();

export function UserProvider({ children }) {

    //state: Representa o estado atual do seu componente ou aplicação. É o objeto que contém as informações relevantes para o seu componente ou parte da aplicação. No seu exemplo, o state parece ser um objeto com duas propriedades: inputs e registedUsers.
    //action: Representa a ação que está sendo despachada para atualizar o estado. Uma ação é um objeto que geralmente possui uma propriedade chamada type para indicar o tipo de ação a ser executada. Pode também conter outros dados necessários para realizar a ação. No seu exemplo, o action também parece ser um objeto, e você está usando a propriedade type para determinar que tipo de ação deve ser realizada.
    // A função reducer que você forneceu é um exemplo típico de como as ações são usadas em um reducer. Dependendo do tipo de ação (action.type), o estado é atualizado de maneira apropriada. Cada case no switch statement representa um tipo de ação e como o estado deve ser atualizado para esse tipo de ação.
    // O reducer é uma função que especifica como o estado da aplicação deve ser atualizado em resposta a uma ação.Ele recebe o estado atual e uma ação, e com base no tipo da ação, realiza as devidas atualizações no estado.
    function reducer(state, action) {

        switch (action.type) {
            case 'name':
                return { ...state, inputs: { ...state.inputs, name: action.text } }
            case 'age':
                return { ...state, inputs: { ...state.inputs, age: action.text } }
            case 'email':
                return { ...state, inputs: { ...state.inputs, email: action.text } }
            case 'country':
                return { ...state, inputs: { ...state.inputs, country: action.text } }
            case 'city':
                return { ...state, inputs: { ...state.inputs, city: action.text } }
            case 'adress':
                return { ...state, inputs: { ...state.inputs, adress: action.text } }
            case 'registerUser':
                return {
                    registedUsers: [{ id: faker.string.uuid(), ...state.inputs }, ...state.registedUsers],
                    inputs: {
                        name: '',
                        age: '',
                        email: '',
                        country: '',
                        city: '',
                        adress: '',
                    }
                }
            case 'deleteUser':
                const newList = state.registedUsers.filter((user) => user.id !== action.id)
                // A ordem do state aqui em baixo faz a diferença. Se eu colocar assim: return {registedUsers: [ ...newList], ...state } não funciona como esperado para apagar o "registedUsers" de state, já que eu preciso espalhar o "state" primeiro para que a propriedade "registedUsers" exista de "state". Se eu fizer o contrário ("registedUsers" primeiro) o "registedUsers" não vai ser de "state", e sim uma nova propriedade.
                return { ...state, registedUsers: [...newList] }
            case 'clear':
                return {
                    ...state,
                    inputs: {
                        name: '',
                        age: '',
                        email: '',
                        country: '',
                        city: '',
                        adress: '',
                    }
                }
            default:
                return "This type does'nt exist!"
        }
    }

    // Aqui, o useReducer é usado para criar o estado (state) inicial e a função dispatch. O reducer é chamado sempre que a função dispatch é invocada.
    const [state, dispatch] = useReducer(reducer, {
        inputs: {
            name: '',
            age: '',
            email: '',
            country: '',
            city: '',
            adress: '',
        },
        registedUsers: [],
    })

    // O valor fornecido pelo contexto é um objeto com duas propriedades: state (o estado atual) e dispatch (a função para atualizar o estado).
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext);
}

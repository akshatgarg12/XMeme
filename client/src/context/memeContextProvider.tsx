import {createContext, useReducer} from 'react'


export const memeContext = createContext<any>(null)

const MemeContextProvider: React.FC<any> = ({children}) => {
  const reducer = (state:any, action:any) => {
     switch (action.type){
      case 'update':
        return action.payload
      case 'current':
        return state
      default:
        return state
    }
  }
  
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <memeContext.Provider value={{memes: state, dispatch}}>
      {children}
    </memeContext.Provider>
  );
}
 
export default MemeContextProvider;
import {createContext, useReducer} from 'react'
import {postData} from '../components/post'


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
  const initialState: [postData] | null = null;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <memeContext.Provider value={{memes: state, dispatch}}>
      {children}
    </memeContext.Provider>
  );
}
 
export default MemeContextProvider;
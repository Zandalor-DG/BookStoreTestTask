import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const useQuery = (): queryString.ParsedQuery<string> => {
    return queryString.parse(useLocation().search, { arrayFormat: 'comma' });
};

// const useQueryUpdate = () => {
//     const query = useLocation().search;
//     const history = useHistory()
//     const [state, setState] = useState(queryString.parse(query));

//     const setValue = (val) => {
//         setState({
//             ...state,
//             ...val
//         })
//     }

//     useEffect(() => {
//         const string = queryString.stringify(state);
//         history.push(string)
//     }, [state]);

//     return {
//         setValue
//     }
// }

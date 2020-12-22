import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function useQuery() {
    return queryString.parse(useLocation().search);
}

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

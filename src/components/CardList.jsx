import Card from './Card'
import Button from './Button'
import Search from './Search'
import { BASE_URL } from '../config'

const CardList = ({ data }) => {
const CardList = () => {
  // define the limit state variable and set it to 10
  const limit = 10;

  // Define the offset state variable and set it to 0
  const [offset, setOffset] = useState(0);
  // Define the products state variable and set it to the default dataset
  const [products, setProducts] = useState(data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data])

  const filterTags = (tagQuery) => {
    const filtered = data.filter(product => {
@@ -28,6 +26,17 @@ const CardList = ({ data }) => {
    setOffset(0)
    setProducts(filtered)
  }
  const fetchProducts = () => {
    fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, [offset]);



  return (
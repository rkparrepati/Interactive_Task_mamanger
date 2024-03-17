import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import usersImg from '../assets/users.svg';
import sunImg from '../assets/sun.svg';
import trendingImg from '../assets/trending.svg';
import zapImg from '../assets/zap.svg';
import CategoryContext from '../store/CategoryContext'; // Import CategoryContext

export default function Categories() {
  const images = { usersImg, sunImg, trendingImg, zapImg };
  const [taskCategory, setTaskCategory] = useContext(CategoryContext); // Get taskCategory from CategoryContext
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get('http://localhost:9090/category/all');
        setCategories(response.data);
      } catch (error) {
        if (error.response) {
          setError('Error: ' + error.response.status);
        } else if (error.request) {
          setError('Error: No response received from server');
        } else {
          setError('Error: ' + error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    getCategories();
  }, []);

  return (
    <ul className="category-list">
      {categories.map((item) => (
        <li
          key={item.id}
          className="item"
          onClick={() => setTaskCategory(item.name)} // Update taskCategory in CategoryContext
        >
          <img className={item.cssClass} src={images[item.img]} alt="" />
          <span className="item-span">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

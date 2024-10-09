// pages/campgrounds.js
import { useEffect, useState } from 'react';

export default function Campgrounds() {
  const [camps, setCamps] = useState([]);
  const [filters, setFilters] = useState({
    position: "",
    camping_theme: "",
    feature_category: "",
    camp_area: "",
    child_type: "",
    pet_type: "",
  });

  const fetchCamps = async () => {
    const queryString = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/camps?${queryString}`);
    const data = await response.json();
    setCamps(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSearch = () => {
    fetchCamps();
  };

  return (
    <div>
      <h1>露營地列表</h1>
      
      <div>
        <h3>選擇露營主題</h3>
        <label>
          <input
            type="radio"
            name="camping_theme"
            value=""
            checked={filters.camping_theme === ""}
            onChange={handleChange}
          />
          所有
        </label>
        <label>
          <input
            type="radio"
            name="camping_theme"
            value="豪華露營"
            checked={filters.camping_theme === "豪華露營"}
            onChange={handleChange}
          />
          豪華露營
        </label>
        <label>
          <input
            type="radio"
            name="camping_theme"
            value="懶人露營"
            checked={filters.camping_theme === "懶人露營"}
            onChange={handleChange}
          />
          懶人露營
        </label>
        <label>
          <input
            type="radio"
            name="camping_theme"
            value="免裝備露營"
            checked={filters.camping_theme === "免裝備露營"}
            onChange={handleChange}
          />
          免裝備露營
        </label>

        <h3>選擇地區</h3>
        <label>
          <input
            type="radio"
            name="position"
            value=""
            checked={filters.position === ""}
            onChange={handleChange}
          />
          所有地區
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="北部"
            checked={filters.position === "北部"}
            onChange={handleChange}
          />
          北部
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="中部"
            checked={filters.position === "中部"}
            onChange={handleChange}
          />
          中部
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="南部"
            checked={filters.position === "南部"}
            onChange={handleChange}
          />
          南部
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="東部"
            checked={filters.position === "東部"}
            onChange={handleChange}
          />
          東部
        </label>

        <h3>特色類別</h3>
        <label>
          <input
            type="radio"
            name="feature_category"
            value=""
            checked={filters.feature_category === ""}
            onChange={handleChange}
          />
          所有
        </label>
        <label>
          <input
            type="radio"
            name="feature_category"
            value="附冷氣"
            checked={filters.feature_category === "附冷氣"}
            onChange={handleChange}
          />
          附冷氣
        </label>
        <label>
          <input
            type="radio"
            name="feature_category"
            value="親子活動"
            checked={filters.feature_category === "親子活動"}
            onChange={handleChange}
          />
          親子活動
        </label>

        <h3>兒童設施</h3>
        <label>
          <input
            type="radio"
            name="child_type"
            value=""
            checked={filters.child_type === ""}
            onChange={handleChange}
          />
          所有
        </label>
        <label>
          <input
            type="radio"
            name="child_type"
            value="嬰兒設施"
            checked={filters.child_type === "嬰兒設施"}
            onChange={handleChange}
          />
          嬰兒設施
        </label>
        <label>
          <input
            type="radio"
            name="child_type"
            value="親子設施"
            checked={filters.child_type === "親子設施"}
            onChange={handleChange}
          />
          親子設施
        </label>

        <h3>寵物選擇</h3>
        <label>
          <input
            type="radio"
            name="pet_type"
            value=""
            checked={filters.pet_type === ""}
            onChange={handleChange}
          />
          所有
        </label>
        <label>
          <input
            type="radio"
            name="pet_type"
            value="可攜帶寵物"
            checked={filters.pet_type === "可攜帶寵物"}
            onChange={handleChange}
          />
          可攜帶寵物
        </label>
        <label>
          <input
            type="radio"
            name="pet_type"
            value="不可攜帶寵物"
            checked={filters.pet_type === "不可攜帶寵物"}
            onChange={handleChange}
          />
          不可攜帶寵物
        </label>
        
        <button onClick={handleSearch}>搜尋</button>
      </div>
      
      <ul>
        {camps.map(camp => (
          <li key={camp.camp_id}>
            {camp.camp_name} - {camp.position} - {camp.camping_theme}
          </li>
        ))}
      </ul>
    </div>
  );
}

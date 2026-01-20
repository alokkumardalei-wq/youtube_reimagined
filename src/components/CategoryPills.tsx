import { useSearchParams } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';

const CategoryPills: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories = searchParams.get('category')?.split(',') || ['All'];

  const toggleCategory = (category: string) => {
    let newCategories;

    if (category === 'All') {
      newCategories = ['All'];
    } else {
      // Remove 'All' if it exists
      const current = selectedCategories.filter(c => c !== 'All');

      if (current.includes(category)) {
        newCategories = current.filter(c => c !== category);
      } else {
        newCategories = [...current, category];
      }
    }

    // If nothing selected, default back to All
    if (newCategories.length === 0) {
      newCategories = ['All'];
    }

    setSearchParams({
      q: searchParams.get('q') || '',
      category: newCategories.join(',')
    });
  };

  return (
    <div className="category-pills">
      {CATEGORIES.map((category, index) => {
        const isActive = selectedCategories.includes(category);
        return (
          <button
            key={index}
            className={`pill ${isActive ? 'active' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        );
      })}

      <style>{`
        .category-pills {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 12px 24px;
          background-color: var(--bg-primary);
          position: sticky;
          top: var(--header-height);
          z-index: 90;
        }
        
        /* Hide scrollbar for clean look */
        .category-pills::-webkit-scrollbar {
            display: none; 
        }

        .pill {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s;
        }

        .pill:hover {
          background-color: var(--bg-hover);
        }

        .pill.active {
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }
      `}</style>
    </div>
  );
};

export default CategoryPills;

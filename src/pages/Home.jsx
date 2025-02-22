import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Banner Image */}
      <img src="/ban1.jpg" className="img-fluid w-100 pt-1" alt="Banner" />

      {/* Cards Section */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        
        <div className="col">
          <div className="card shadow-sm">
            <img src="https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg" className="card-img-top" alt="Veg Recipes" width="100px" height="300px"/>
            <div className="card-body">
              <h5 className="card-title">🥗 Veg Recipes</h5>
              <p className="card-text">Explore delicious vegetarian recipes with fresh ingredients.</p>
              <p className="text-muted">⏳ 30 mins | 🏆 Easy | ⭐⭐⭐⭐☆ (4.5/5)</p>
              <button className="btn btn-success">View Recipe</button>
              <button className="btn btn-outline-danger ms-2">❤️ Save</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://assets.zeezest.com/images/PROD_3_1662611644161.jpg" className="card-img-top" alt="Non-Veg Recipes"width="100px" height="300px" />
            <div className="card-body">
              <h5 className="card-title">🍗 Non-Veg Recipes</h5>
              <p className="card-text">Enjoy delicious meat-based dishes from around the world.</p>
              <p className="text-muted">⏳ 45 mins | 🏆 Medium | ⭐⭐⭐⭐⭐ (5/5)</p>
              <button className="btn btn-success">View Recipe</button>
              <button className="btn btn-outline-danger ms-2">❤️ Save</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://th.bing.com/th/id/OIP.SFmZoeTYOla0uWFetnZIogHaFs?rs=1&pid=ImgDetMain" className="card-img-top" alt="Desserts"width="100px" height="300px" />
            <div className="card-body">
              <h5 className="card-title">🍰 Desserts</h5>
              <p className="card-text">Indulge in sweet treats and homemade desserts.</p>
              <p className="text-muted">⏳ 20 mins | 🏆 Easy | ⭐⭐⭐⭐☆ (4.2/5)</p>
              <button className="btn btn-success">View Recipe</button>
              <button className="btn btn-outline-danger ms-2">❤️ Save</button>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card shadow-sm">
            <img src="https://nosweatvegan.com/wp-content/uploads/2023/02/CHipotle-sofritas-bowl-recipe-768x768.jpg" className="card-img-top" alt="Quick Meals" width="100px" height="300px"/>
            <div className="card-body">
              <h5 className="card-title">⏳ Quick Meals</h5>
              <p className="card-text">Make delicious meals in under 15 minutes.</p>
              <p className="text-muted">⏳ 15 mins | 🏆 Super Easy | ⭐⭐⭐⭐☆ (4.7/5)</p>
              <button className="btn btn-success">View Recipe</button>
              <button className="btn btn-outline-danger ms-2">❤️ Save</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

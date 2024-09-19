
export default function homeContent(){

    const contentArea = document.getElementById("content");

        contentArea.innerHTML = `
            <div class = "greeting">
                <h1 class = "restaurantName">Casa Nostra</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam totam quibusdam 
                    possimus reiciendis magnam, dolor cupiditate blanditiis ipsa velit suscipit labore 
                    veritatis, dolorum corporis eveniet ea, accusamus consectetur maxime dolores!</p>
            </div>
        `;
};

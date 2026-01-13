console.log("Hotel Website Loaded Successfully");

function openFood(id) {
    const foods = {
        1: {
            img: "picture/food1.jpeg",
            name: "Steak Premium",
            desc: "Daging premium juicy dengan bumbu khas hotel kami. Disajikan dengan sayuran segar dan saus spesial."
        },
        2: {
            img: "picture/food2.jpeg",
            name: "Shrimp Pasta",
            desc: "Pasta creamy dengan udang fresh, cocok untuk kamu yang suka rasa gurih lembut."
        },
        3: {
            img: "picture/food3.jpeg",
            name: "Chicken Teriyaki",
            desc: "Ayam teriyaki manis–asin yang lembut, disajikan dengan nasi hangat."
        },
        4: {
            img: "picture/food4.jpeg",
            name: "Salmon Bowl",
            desc: "Salmon panggang berkualitas premium dipadukan dengan salad, nasi, dan saus lemon."
        },
        5: {
            img: "picture/food5.jpeg",
            name: "Chocolate Lava",
            desc: "Dessert coklat lembut dengan lelehan coklat panas di dalamnya."
        }
    };

    document.getElementById("foodImg").src = foods[id].img;
    document.getElementById("foodName").innerText = foods[id].name;
    document.getElementById("foodDesc").innerText = foods[id].desc;

    document.getElementById("foodModal").style.display = "flex";
}

function closeFood() {
    document.getElementById("foodModal").style.display = "none";
}

const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(card => {
    card.addEventListener("click", () => {
        foodCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});

const navbar = document.querySelector("#Navbar");

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 50){
        navbar.classList.add("blurnav");
    }
    else{
        navbar.classList.remove("blurnav");
    }
});

const tl = gsap.timeline();
tl.to("#Navbar" , {
    y:0,
    opacity:1,
    duration:0.3,
})
tl.to(".hero-box" , {
    y:0,
    opacity:1,
    duration:0.6,
})

// 
gsap.registerPlugin(ScrollTrigger);

gsap.to("#sign-dish-box", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#sign-dish-box",
        start: "top 80%"
    }
});
gsap.to(".story-img", {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".story-img",
        
    }
});
gsap.to(".menu-items" ,{
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".menu-items",
    }
});
// 
// navbar button
const navlink = document.querySelector(".nav-link");
const menubtn = document.querySelector("#Navbar i");

menubtn.addEventListener("click" , () =>{
    navlink.classList.toggle("showNavlink")
})
// navbar btton


// menu btn
const menuData = {
  starters: [
    {
      name: "Bruschetta",
      description: "Grilled bread with tomatoes, garlic, basil & olive oil.",
      price: "$9.00",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms filled with cream cheese, herbs & parmesan.",
      price: "$11.00",
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Tomato Basil Soup",
      description: "Smooth tomato soup with basil and a touch of cream.",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Crispy Calamari",
      description: "Lightly fried calamari served with lemon aioli.",
      price: "$13.00",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Caprese Skewers",
      description: "Cherry tomatoes, mozzarella, basil & balsamic glaze.",
      price: "$10.00",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Truffle Fries",
      description: "Crispy fries tossed with truffle oil & parmesan.",
      price: "$7.00",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80"
    }
  ],
  main: [
    {
      name: "Prime Ribeye",
      description: "Char-grilled ribeye with herb butter and roasted vegetables.",
      price: "$36.00",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Seared Salmon",
      description: "Norwegian salmon, lemon butter and grilled asparagus.",
      price: "$28.00",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle and parmesan cream.",
      price: "$24.00",
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Herb Chicken",
      description: "Roasted chicken breast with garden herbs and jus.",
      price: "$22.00",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80"
    }
  ],
  desserts: [
    {
      name: "Chocolate Lava",
      description: "Warm chocolate cake with a molten center and vanilla ice cream.",
      price: "$12.00",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Tiramisu",
      description: "Classic mascarpone, espresso and cocoa.",
      price: "$10.00",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Berry Panna Cotta",
      description: "Silky vanilla panna cotta with fresh berries.",
      price: "$9.00",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Crème Brûlée",
      description: "Vanilla custard finished with a crisp caramel crust.",
      price: "$11.00",
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=300&q=80"
    }
  ],
  drinks: [
    {
      name: "SAVORÉ Spritz",
      description: "Citrus, sparkling wine, bitter orange and rosemary.",
      price: "$13.00",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Berry Fizz",
      description: "Fresh berries, lime, mint and sparkling water.",
      price: "$9.00",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Espresso Martini",
      description: "Cold espresso, vanilla and a silky finish.",
      price: "$12.00",
      image: "https://images.unsplash.com/photo-1607687633950-c745bdb4da70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXNwcmVzc28lMjBNYXJ0aW5pfGVufDB8fDB8fHww"
    },
    {
      name: "Citrus Tonic",
      description: "Grapefruit, tonic, thyme and fresh citrus.",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80"
    }
  ]
};


const menuitems = document.querySelector(".menu-items")
function loadmenu(category){
    menuitems.innerHTML = "";

    menuData[category].forEach(item =>{
        
        const menuitem = document.createElement("div")
        menuitem.classList.add("menu-item")

        menuitem.innerHTML +=`
                    <div class="item-img"></div>
                    <div class="item-name">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                    <div class="item-price">${item.price}</div>`
        menuitems.append(menuitem);
        const itemimage = menuitem.querySelector(".item-img")
        itemimage.style.backgroundImage = `url("${item.image}")`;
    })
}

const allmenubtn = document.querySelectorAll(".menu-cate button");
allmenubtn.forEach(button =>{
    button.addEventListener("click" ,() =>{
        allmenubtn.forEach(btn =>{
            btn.classList.remove("active");
        })
        button.classList.add("active")

        const category = button.dataset.category;

        loadmenu(category);
    })
})
loadmenu("starters")
// menu btn
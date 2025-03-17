document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".product-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // 按鈕點擊時滑動
    prevBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -200, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({ left: 200, behavior: "smooth" });
    });

    // 滑鼠拖動滑動
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseleave", () => isDown = false);
    slider.addEventListener("mouseup", () => isDown = false);

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // 滑動速度
        slider.scrollLeft = scrollLeft - walk;
    });
});

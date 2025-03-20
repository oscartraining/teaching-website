document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".product-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // 按鈕點擊時垂直滑動
    prevBtn.addEventListener("click", () => {
        slider.scrollBy({ top: -200, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({ top: 200, behavior: "smooth" });
    });

    // 滑鼠拖動垂直滑動
    let isDown = false;
    let startY;
    let scrollTop;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startY = e.pageY - slider.offsetTop;
        scrollTop = slider.scrollTop;
        slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseleave", () => isDown = false);
    slider.addEventListener("mouseup", () => isDown = false);

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - slider.offsetTop;
        const walk = (y - startY) * 2; // 滑動速度
        slider.scrollTop = scrollTop - walk;
    });
});
